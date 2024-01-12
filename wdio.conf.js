exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'pepka_LEHatP',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'JQCoFyYuL4BPwip2rr8j',
  
    updateJob: false,
    specs: [
      './test/specs/**.e2e.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://7806afbc939f08ea6e1dde655ada9376e82372a9',
      'browserstack.debug': true
    }],
  
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
    }
  };