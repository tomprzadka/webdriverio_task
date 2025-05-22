import { getEnv } from './env';
import { getAppPath } from './paths';
import { config as sharedConfig } from './wdio.shared.conf';

const {
  APPIUM_PORT,
  APPIUM_HOST,
  PLATFORM_NAME,
  APP_PACKAGE,
  AVD,
  APP_NAME,
  PLATFORM_VERSION,
  AUTOMATION_NAME,
  APP_WAIT_ACTIVITY,
  APP_ACTIVITY,
} = getEnv();

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  maxInstances: 1,
  port: APPIUM_PORT,
  hostname: APPIUM_HOST,
  capabilities: [
    {
      platformName: PLATFORM_NAME,
      'appium:options': {
        platformVersion: PLATFORM_VERSION,
        automationName: AUTOMATION_NAME,
        appPackage: APP_PACKAGE,
        app: getAppPath(APP_NAME),
        avd: AVD,
        appActivity: `${APP_PACKAGE}.${APP_ACTIVITY}`,
        appWaitActivity: `${APP_PACKAGE}.${APP_WAIT_ACTIVITY}`,
      },
    },
  ],
};
