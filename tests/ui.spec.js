const puppeteer = require('puppeteer');

describe('Sample App UI Test', () => {
  it('should display the correct title and message', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    
    const title = await page.title();
    expect(title).toBe('Sample App');

    const message = await page.$eval('#message', el => el.textContent);
    expect(message).toBe('Hello World!');

    await browser.close();
  });
});
