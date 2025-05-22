interface EnvConfig {
  APPIUM_PORT: number;
  APPIUM_HOST: string;
  PLATFORM_NAME: string;
  APP_PACKAGE: string;
  AVD: string;
  APP_NAME: string;
  PLATFORM_VERSION: string;
  AUTOMATION_NAME: string;
  APP_WAIT_ACTIVITY: string;
  APP_ACTIVITY: string;
}

export function getEnv(): EnvConfig {
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
  } = process.env;

  if (
    !APPIUM_PORT ||
    !APPIUM_HOST ||
    !PLATFORM_NAME ||
    !APP_PACKAGE ||
    !AVD ||
    !APP_NAME ||
    !PLATFORM_VERSION ||
    !AUTOMATION_NAME ||
    !APP_WAIT_ACTIVITY ||
    !APP_ACTIVITY
  )
    throw new Error('One of required variables is missing');

  return {
    APPIUM_PORT: parseInt(APPIUM_PORT, 10),
    APPIUM_HOST: APPIUM_HOST,
    PLATFORM_NAME: PLATFORM_NAME,
    APP_PACKAGE: APP_PACKAGE,
    AVD: AVD,
    APP_NAME: APP_NAME,
    PLATFORM_VERSION: PLATFORM_VERSION,
    AUTOMATION_NAME: AUTOMATION_NAME,
    APP_WAIT_ACTIVITY: APP_WAIT_ACTIVITY,
    APP_ACTIVITY: APP_ACTIVITY,
  };
}
