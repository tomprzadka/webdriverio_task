import { saveRecording, saveScreenshot, saveToAppiumLog } from '../utils/utils';
import { SCREENSHOTS_DIR, VIDEOS_DIR } from './paths';
import { specs } from './wdio.specs';

export const config: WebdriverIO.Config = {
  specs: specs,
  exclude: [],
  capabilities: [],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  beforeHook: async function () {
    await browser.startRecordingScreen();
  },

  afterHook: async function (test, { error, passed, duration }) {
    if (error || !passed) {
      const testName = `${test.parent}-${test.title}`;
      const screenshotPath = `${SCREENSHOTS_DIR}${testName}`;
      const videoPath = `${VIDEOS_DIR}${testName}`;
      await saveScreenshot(screenshotPath);
      await saveRecording(videoPath);

      const errorMessage = `HookError: ${testName} failed. Error: ${error?.message}. Duration: ${duration}ms`;
      await saveToAppiumLog(errorMessage);
    }
  },

  beforeTest: async function () {
    await browser.startRecordingScreen();
  },

  afterTest: async function (test, { error, passed, duration }) {
    if (error || !passed) {
      const testName = `${test.parent}-${test.title}`;
      const screenshotPath = `${SCREENSHOTS_DIR}${testName}`;
      const videoPath = `${VIDEOS_DIR}${testName}`;
      await saveScreenshot(screenshotPath);
      await saveRecording(videoPath);

      const errorMessage = `TestError: ${testName} failed. Error: ${error?.message}. Duration: ${duration}ms`;
      await saveToAppiumLog(errorMessage);
    }
  },
};
