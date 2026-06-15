const { chromium } = require("playwright");

const TARGET_URL = process.env.TARGET_URL || "http://localhost:3010";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "mobile", width: 390, height: 844 },
];

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 30 });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on("pageerror", (e) => console.error("[pageerror]", e.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") console.error("[console.error]", msg.text());
  });

  console.log("Target URL:", TARGET_URL);

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    console.log("=== Gallery " + vp.name + " ===");

    await page.goto(TARGET_URL + "/social-media-posts", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});

    const title = await page.locator("h1").first().textContent();
    console.log("  hero title:", (title || "").trim());

    const cards = await page.locator('a[href^="/social-media-posts/"]').count();
    console.log("  visible cards:", cards);

    await page.waitForTimeout(800);
    const iframeCount = await page.locator("iframe").count();
    console.log("  iframes rendered:", iframeCount);

    // Pre-scroll so native loading=lazy iframes warm up before fullPage
    // screenshot stitches everything together.
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += 600;
          if (y < document.body.scrollHeight + 1200) {
            setTimeout(step, 80);
          } else {
            window.scrollTo(0, 0);
            setTimeout(resolve, 200);
          }
        };
        step();
      });
    });
    await page.waitForTimeout(1800);

    await page.screenshot({
      path: "C:/Users/General/AppData/Local/Temp/social-posts-gallery-" + vp.name + ".png",
      fullPage: true,
    });
  }

  // Interactions on desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(TARGET_URL + "/social-media-posts", { waitUntil: "networkidle" });
  console.log("=== Interactions ===");

  await page.getByRole("button", { name: /Story/ }).click();
  await page.waitForTimeout(500);
  const storyCount = await page.locator('a[href^="/social-media-posts/"]').count();
  console.log("  after Story filter, cards:", storyCount);

  await page.getByRole("button", { name: /^All/ }).click();
  await page.waitForTimeout(300);
  await page.fill('input[type="search"]', "map");
  await page.waitForTimeout(500);
  const searchCount = await page.locator('a[href^="/social-media-posts/"]').count();
  console.log("  after search 'map', cards:", searchCount);

  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-search.png",
    fullPage: true,
  });

  // Detail page
  console.log("=== Detail page (feed 1:1) ===");
  await page.fill('input[type="search"]', "");
  await page.waitForTimeout(200);
  await page
    .locator('a[href="/social-media-posts/feed-01-editorial-portrait"]')
    .first()
    .click();
  await page.waitForURL(/feed-01-editorial-portrait/);
  await page.waitForTimeout(1200);
  console.log("  detail title:", (await page.locator("h1").first().textContent() || "").trim());

  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-detail-feed-desktop.png",
    fullPage: true,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-detail-feed-mobile.png",
    fullPage: true,
  });

  // Story detail (9:16)
  console.log("=== Detail page (story 9:16) ===");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(TARGET_URL + "/social-media-posts/story-15-event-poster", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-detail-story-desktop.png",
    fullPage: true,
  });

  // Full-view lightbox
  console.log("=== Full-view lightbox ===");
  await page.getByRole("button", { name: /Full view/i }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-fullview-story.png",
    fullPage: false,
  });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);

  // Tablet story detail
  await page.setViewportSize({ width: 820, height: 1180 });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "C:/Users/General/AppData/Local/Temp/social-posts-detail-story-tablet.png",
    fullPage: true,
  });

  // Iframe sanity check on the right post
  const iframeInfo = await page.locator("iframe").first().evaluate((el) => ({
    width: el.style.width,
    height: el.style.height,
    transform: getComputedStyle(el).transform,
    pe: getComputedStyle(el).pointerEvents,
  }));
  console.log("  story iframe:", JSON.stringify(iframeInfo));

  await browser.close();
  console.log("DONE");
})();
