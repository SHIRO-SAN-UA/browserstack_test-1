const browserstackAppId = process.env.BROWSERSTACK_APP_ID;

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './test/specs/*.e2e.js'
  ],
  exclude: [],

  capabilities: [
    {
      // Google Pixel 4 configuration
      project: "Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'test_on_google_pixel_3',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: browserstackAppId,
      'browserstack.debug': true
    },
    {
      // Samsung Galaxy S10 configuration
      project: "Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'test_on_samsung_galaxy_s10',
      device: 'Samsung Galaxy S10',
      os_version: "9.0",
      app: browserstackAppId,
      'browserstack.debug': true
    }
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  },
};
// Device selection based on environment variable, default to Pixel 3
if (process.env.TEST_DEVICE === 'GalaxyS10') {
  exports.config.capabilities = [exports.config.capabilities[1]]; // Samsung Galaxy S10
} else {
  // Default to Google Pixel 4
  exports.config.capabilities = [exports.config.capabilities[0]];
};
