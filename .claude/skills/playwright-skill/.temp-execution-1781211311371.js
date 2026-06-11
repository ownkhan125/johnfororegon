const { chromium } = require('playwright');
const path = require('path');
const dir = 'C:/Users/General/Documents/GitHub/johnfororegon/campaign-social';
const outDir = path.join(dir, 'previews');
const targets = [
  ['feed-09-endorsement.html', 1080, 1080],
  ['story-14-numeric-hero.html', 1080, 1920],
  ['story-16-pull-quote.html', 1080, 1920],
  ['story-17-map-storytelling.html', 1080, 1920],
];
(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const [f, w, h] of targets) {
    await page.setViewportSize({ width: w, height: h });
    const url = 'file:///' + path.join(dir, f).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 }).catch(()=>{});
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(outDir, f.replace('.html', '.png')), fullPage: false });
    console.log('✅', f);
  }
  await browser.close();
})();
