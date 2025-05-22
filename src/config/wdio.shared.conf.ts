import {
  disableAnimations,
  restoreAnimations,
  saveRecording,
  saveScreenshot,
  saveToAppiumLog,
} from '../utils/utils';
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
  //@ts-expect-error context is necessary as afterHook exposes params in Test, context, TestResult order
  afterHook: async function (test, context, result) {
    if (!result.passed) {
      const testName = `${test.parent}-${test.title}`;
      const screenshotPath = `${SCREENSHOTS_DIR}${testName}`;
      const videoPath = `${VIDEOS_DIR}${testName}`;
      await saveScreenshot(screenshotPath);
      await saveRecording(videoPath);

      const errorMessage = `HookError: ${testName} failed. Error: ${result.error}.`;
      await saveToAppiumLog(errorMessage);
    }
  },

  beforeTest: async function () {
    await browser.startRecordingScreen();
  },
  //@ts-expect-error context is necessary as afterTest exposes params in Test, context, TestResult order
  afterTest: async function (test, context, result) {
    if (!result.passed) {
      const testName = `${test.parent}-${test.title}`;
      const screenshotPath = `${SCREENSHOTS_DIR}${testName}`;
      const videoPath = `${VIDEOS_DIR}${testName}`;
      await saveScreenshot(screenshotPath);
      await saveRecording(videoPath);

      const errorMessage = `TestError: ${testName} failed. Error: ${result.error}.`;
      await saveToAppiumLog(errorMessage);
    }
  },

  before: async function () {
    await disableAnimations();
  },

  after: async function () {
    await restoreAnimations();
  },
};
