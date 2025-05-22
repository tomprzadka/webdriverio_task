export async function saveScreenshot(path: string): Promise<void> {
  await driver.saveScreenshot(`${path}.png`);
}
export async function saveRecording(path: string): Promise<void> {
  await driver.saveRecordingScreen(`${path}.mp4`);
}

export async function saveToAppiumLog(errorMessage: string): Promise<void> {
  await driver.logEvent('appium', `[CUSTOM_ERROR] ${errorMessage}`);
}

export async function disableAnimations(): Promise<void> {
  await driver.execute('mobile:shell', {
    command: 'settings put global window_animation_scale 0',
  });
  await driver.execute('mobile:shell', {
    command: 'settings put global transition_animation_scale 0',
  });
  await driver.execute('mobile:shell', {
    command: 'settings put global animator_duration_scale 0',
  });
}

export async function restoreAnimations(): Promise<void> {
  await driver.execute('mobile:shell', {
    command: 'settings put global window_animation_scale 1',
  });
  await driver.execute('mobile:shell', {
    command: 'settings put global transition_animation_scale 1',
  });
  await driver.execute('mobile:shell', {
    command: 'settings put global animator_duration_scale 1',
  });
}
