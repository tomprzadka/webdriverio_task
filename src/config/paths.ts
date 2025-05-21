import path from 'path';

const ROOT_DIR = process.cwd();
export const SRC_DIR = path.join(ROOT_DIR, 'src');
export const APPS_DIR = path.join(SRC_DIR, 'apps');
export const getAppPath = (appName: string): string =>
  path.join(APPS_DIR, appName);
export const ERROR_ARTIFACTS_DIR = path.join(ROOT_DIR, 'error-artifacts/');
export const SCREENSHOTS_DIR = path.join(ERROR_ARTIFACTS_DIR, 'screenshots/');
export const VIDEOS_DIR = path.join(ERROR_ARTIFACTS_DIR, 'videos/');
