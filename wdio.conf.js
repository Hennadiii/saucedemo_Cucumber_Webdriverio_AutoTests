// wdio.conf.js
const { join } = require('path');

exports.config = {
  runner: 'local',
  path: '/',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./features/step-definitions/**/*.js'],
    backtrace: true,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
