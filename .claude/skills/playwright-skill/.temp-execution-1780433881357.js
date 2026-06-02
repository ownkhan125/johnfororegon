const { chromium } = require('playwright');
const fs = require('fs');

const TARGET = 'http://localhost:3003';
const PAGES = [
  '/',
  '/about',
  '/events',
  '/events/bend-town-hall',
  '/volunteer',
  '/contact',
  '/privacy',
  '/terms',
];
const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-900', width: 900, height: 1180 },
  { name: 'tablet-1024', width: 1024, height: 1280 },
  { name: 'desktop-1280', width: 1280, height: 900 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

async function scrollAllSections(page) {
  await page.evaluate(async () => {
    const distance = window.innerHeight * 0.55;
    const max = document.body.scrollHeight;
    let y = 0;
    while (y < max) {
      window.scrollTo({ top: y, behavior: 'auto' });
      await new Promise((r) => setTimeout(r, 200));
      y += distance;
    }
    window.scrollTo({ top: max, behavior: 'auto' });
    await new Promise((r) => setTimeout(r, 350));
    window.scrollTo({ top: 0, behavior: 'auto' });
    await new Promise((r) => setTimeout(r, 200));
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  const consoleErrors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 200));
  });

  const outDir = '/tmp/john-audit-resp';
  fs.mkdirSync(outDir, { recursive: true });

  const summary = [];

  for (const route of PAGES) {
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      try {
        const resp = await page.goto(TARGET + route, {
          waitUntil: 'networkidle',
          timeout: 25000,
        });
        await scrollAllSections(page);
        await page
          .waitForLoadState('networkidle', { timeout: 8000 })
          .catch(() => {});
        await page.waitForTimeout(350);

        const file = `${outDir}/${(route.replace(/\//g, '_') || 'home')}_${vp.name}.png`;
        await page.screenshot({ path: file, fullPage: true });

        const stats = await page.evaluate(() => {
          const docW = document.documentElement.scrollWidth;
          const overflow = docW - window.innerWidth;
          // tallest button
          const buttons = [...document.querySelectorAll('a,button')]
            .filter((b) => /inline-flex|h-\d/.test(b.className || ''))
            .map((b) => {
              const r = b.getBoundingClientRect();
              return { w: Math.round(r.width), h: Math.round(r.height) };
            });
          const tallButtons = buttons.filter((b) => b.h > 56).length;
          // images with naturalWidth 0
          const broken = [...document.querySelectorAll('img')].filter(
            (i) => !i.complete || i.naturalWidth === 0,
          ).length;
          return {
            overflow,
            buttonCount: buttons.length,
            tallButtons,
            brokenImgs: broken,
          };
        });

        summary.push({
          route,
          viewport: vp.name,
          width: vp.width,
          status: resp?.status() || 0,
          overflow: stats.overflow,
          tallButtons: stats.tallButtons,
          brokenImgs: stats.brokenImgs,
        });
      } catch (e) {
        summary.push({
          route,
          viewport: vp.name,
          error: e.message.slice(0, 120),
        });
      }
    }
  }

  // Print compact summary table
  const bad = summary.filter(
    (s) => s.error || s.overflow > 0 || s.tallButtons > 0 || s.brokenImgs > 0,
  );
  console.log(JSON.stringify({
    total: summary.length,
    issues: bad,
    consoleErrors: [...new Set(consoleErrors)].slice(0, 12),
  }, null, 2));

  await browser.close();
})();
