# 📱 Mobile App Test Automation (WebdriverIO + Appium)

This project is a test automation setup for an Android mobile application, built with **WebdriverIO**, **Appium**, and **TypeScript**.

> **Note:** This framework was developed and tested on **macOS** only.  
> While it may work on other systems (e.g., Windows), compatibility is not guaranteed without adjustments.

## Requirements

- Node.js (v20.8.1 used in development of this framework)
- Java JDK 11+ (openjdk 22.0.2 used in development of this framework)
- Android SDK & AVD setup
- Appium server running separately
- Android emulator

## Installation

```bash
npm install
```

## Environment Configuration

Create a copy of `.env.template`. All keys provided there need to have value, otherwise
the framework will throw an error.

```env
APPIUM_PORT=4723
APPIUM_HOST=localhost
PLATFORM_NAME=Android
APP_PACKAGE=com.swaglabsmobileapp
AVD=
PLATFORM_VERSION=
APP_NAME=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
AUTOMATION_NAME=UIAutomator2
APP_ACTIVITY=.SplashActivity
APP_WAIT_ACTIVITY=.MainActivity
APPIUM_LOG_PATH=./logs/appium.log
USERNAME=standard_user
PASSWORD=secret_sauce
```

Most of the keys are already filled in as this data is publicly available in this readme.
`AVD` and `PLATFORM_VERSION` need to be provided as these depend on your local configuration of your Android emulator.

Download apk file from [github](https://github.com/saucelabs/sample-app-mobile/releases/)
Ensure that your APK file (`my-app.apk`) is placed inside the following folder:

```
src/apps/
```

## Running Tests

First, Appium server needs to be up and running. Start it with:

```bash
npm run appium:start
```

Then, in the second terminal window:

```bash
npm run test:android
```

Launches all tests provided in [specs](./src//config/wdio.specs.ts) file.
Since all the tests cover order flow, these tests are included in a single spec file, hence no suites were created. All tests are required to run in provided sequence, as there is no data cleanup between tests.

## Project Structure

```
error-artifacts/
├── screenshots/    Screenshots taken on hook or test failure
└── videos/         Videos taken on hook or test failure
logs                Appium logs
src/
├── apps/           APK files (not versioned)
├── config/         Configuration logic and env handling
├── models/         Test data interfaces
├── test/
    ├── components/ Page Objects common between multiple screen
    ├── helpers/    actions object wrapper for interacting with selectors
    ├── pages/      Page Objects for separate screens of the app
    ├── specs/      Tests
    ├── views/      Page Objects for Modals
├── test-data/      Test data loaded from .env file
└── utils/          Framework-related actions
```

## Notes

- The `.apk` file is **not included** in the repository. Please refer to the instructions above for placing the file.
- `avd` capability may not always work. If this happens, please remove said capability from [wdio.android.caps.ts](./src/config/wdio.android.caps.ts#34) and launch the emulator by yourself

## Design Decisions

### Why not use `@wdio/appium-service`?

While [@wdio/appium-service](https://webdriver.io/docs/appium-service/) is convenient for simple setups, this project avoids it in favor of full control over how the Appium server is started. This allows:

- Easier integration with a Selenium Grid setup in CI environments
- Cleaner separation between test runner and device infrastructure

### Why target only Android Emulators?

The project is designed to work reliably across development and CI environments. Supporting physical devices would require:

- Passing a device's UDID dynamically (e.g., via environment variable)
- Replacing [avd](./src/config/wdio.android.caps.ts#34) with `udid`
- Updating [env.ts](./src/config/env.ts) so it reads and parses `udid` environment variable
- Maintaining USB connections or device farms in CI, which adds complexity

Focusing on Android emulators ensures stable, reproducible test runs without external dependencies.

### Why Xpath over uiautomator selectors

Just a matter of preference. Xpaths may not be fast and in this particular application may not be super 'smart' as there was a need to traverse the tree using `../` and `/parent` syntax, but given the application is no longer maintained these selectors will never break.
