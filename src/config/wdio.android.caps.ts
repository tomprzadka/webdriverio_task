import { getEnv } from './env';
import { config as sharedConfig } from './wdio.shared.conf';
import path from 'path';
import { fileURLToPath } from 'url';

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
} = getEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        app: path.join(__dirname, '..', 'apps', APP_NAME),
        avd: AVD,
        appWaitActivity: `${APP_PACKAGE}.${APP_WAIT_ACTIVITY}`,
      },
    },
  ],
};
