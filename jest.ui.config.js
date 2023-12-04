module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.ui\\.test\\.js$',
    setupFilesAfterEnv: ['expect-puppeteer']
  };
  