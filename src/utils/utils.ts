export async function saveScreenshot(path: string): Promise<void> {
  await driver.saveScreenshot(`${path}.png`);
}
export async function saveRecording(path: string): Promise<void> {
  await driver.saveRecordingScreen(`${path}.mp4`);
}

export async function saveToAppiumLog(errorMessage: string): Promise<void> {
  await driver.logEvent('appium', `[CUSTOM_ERROR] ${errorMessage}`);
}
