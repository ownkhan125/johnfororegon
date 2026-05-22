const { chromium } = require('playwright');
const TARGET_URL = 'http://localhost:3003';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('pageerror', (err) => console.error('PAGE ERROR:', err.message));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Scroll to endorsements
  await page.evaluate(() => {
    const el = document.getElementById('endorsements');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(1200);

  // Hover the first testimonial figure
  const testimonial = page.locator('#endorsements figure').first();
  const box = await testimonial.boundingBox();
  if (box) {
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.3, { steps: 12 });
    await page.waitForTimeout(700);
    await page.screenshot({ path: '/tmp/playwright-shots/hover-fix-endorsement.png', clip: { x: box.x - 20, y: box.y - 20, width: box.width + 40, height: box.height + 40 } });
    console.log('saved hover-fix-endorsement.png');
  }

  // Also verify GetInvolved and Events hovers
  await page.evaluate(() => {
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(1100);
  const evCard = page.locator('#events article').first();
  const ev = await evCard.boundingBox();
  if (ev) {
    await page.mouse.move(ev.x + ev.width * 0.7, ev.y + ev.height * 0.3, { steps: 12 });
    await page.waitForTimeout(700);
    await page.screenshot({ path: '/tmp/playwright-shots/hover-fix-event.png', clip: { x: ev.x - 20, y: ev.y - 20, width: ev.width + 40, height: ev.height + 40 } });
    console.log('saved hover-fix-event.png');
  }

  await page.evaluate(() => {
    const el = document.getElementById('donate');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(1100);
  const tile = page.locator('#donate a').first();
  const t = await tile.boundingBox();
  if (t) {
    await page.mouse.move(t.x + t.width * 0.5, t.y + t.height * 0.4, { steps: 12 });
    await page.waitForTimeout(700);
    await page.screenshot({ path: '/tmp/playwright-shots/hover-fix-tile.png', clip: { x: t.x - 20, y: t.y - 20, width: t.width + 40, height: t.height + 40 } });
    console.log('saved hover-fix-tile.png');
  }

  await browser.close();
  console.log('done');
})();
