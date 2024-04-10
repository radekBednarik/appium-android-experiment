# Testing native mobile apps using [Webdriver.io](https://webdriver.io/) and [Appium](https://appium.io)

## Local testing

Testing on local machine and initial setup are not trivial. Notes below are primarily for usage later, when I will forget most of things I learned when exploring this topic.

### Local setup

#### Preconditions

- [Node.js](https://nodejs.org) LTS
- [Android Studio](https://developer.android.com/studio)
- [Appium Inspector](https://appium.io/docs/en/latest/ecosystem/tools/)

#### Project setup

- create a folder of the project
- run `npm init wdio@latest .`
  - go thru the CLI wizard. Do not forget to install Appium thru the process. Appium will be installed only for this project, so the `appium ...` commands will not be accessible globally
  - to install appium and whole needed ecosystem correctly, you can use `appium-installer` as it is described [HERE](https://webdriver.io/docs/appium). Or follow [THIS](https://appium.io/docs/en/latest/quickstart/) quickstart guide
- do not forget to correctly set `ANDROID_HOME` and `JAVA_HOME` ENV variables as it is described in [Appium quickstart guide](https://appium.io/docs/en/latest/quickstart/)

#### What app to test?

If you do not have your own mobile app, which you would build to `.apk` file, you can use one of the default Android Studio projects for mobile apps, as it is used in this repository.

#### Wdio notes

- latest version is using ESM, so when importing you files, you have to append `.js`, if you are using Typescript.
- see examples in this repo
- if you have installed appium wdio service, then as of today's date it is rather unstable and often block rerunning session in the same shell environment. The solution is to disable `appium` service in the `wdio.config.ts` and start appium manually via `npx appium` in separate shell window.

### Testing on real native mobile apps

- you can connect locally to phone via `adb` (should be installed within platform-tools with Android Studio) or you can connect and start in Android Studio
- you can use cloud services like Lambda Test, see:
  - [GUIDE](https://www.lambdatest.com/support/docs/appium-nodejs-webdriverio/)
  - [CAPABILITIES_GENERATOR](https://www.lambdatest.com/capabilities-generator/)

## Useful links

- [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) - all available commands via UiAutomator/Appium
- [wdio mobile selectors](https://webdriver.io/docs/selectors#mobile-selectors) - how to create selectors in mobile apps for wdio
- [wdio services plugins](https://webdriver.io/docs/appium-service)
