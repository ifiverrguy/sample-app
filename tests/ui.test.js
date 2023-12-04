const puppeteer = require('puppeteer-core');

describe('UI Tests', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: '/opt/homebrew/bin/chromium', // Specify the path to Chromium
      headless: true, // You can set this to false if you want to see the browser window during testing
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  it('should display the correct title', async () => {
    await expect(page.title()).resolves.toMatch('Sample App');
  });

  afterAll(async () => {
    await browser.close();
  });
});
