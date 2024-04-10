import { expect } from "@wdio/globals";
import HomescreenAndroid from "../pageobjects/homescreen.android.js";
import NavigationDrawerAndroid from "../pageobjects/navigationDrawer.android.js";

describe("Test", () => {
  beforeEach(async function () {
    await HomescreenAndroid.clearApp();
    await HomescreenAndroid.activateApp();
  });

  afterEach(async function () {
    await HomescreenAndroid.terminateApp();
  });

  it("app is opened", async function () {
    await expect(HomescreenAndroid.toolbar).toBeDisplayed();
  });

  it("navigation drawer opens", async function () {
    await HomescreenAndroid.openNavigationDrawer();

    await expect(NavigationDrawerAndroid.self).toBeDisplayed();
    await expect(NavigationDrawerAndroid.itemHome).toBeDisplayed();
  });

  it("clicking item Home in nav drawer closes the drawer", async function () {
    await HomescreenAndroid.openNavigationDrawer();
    await NavigationDrawerAndroid.clickHome();

    await expect(NavigationDrawerAndroid.itemHome).not.toBeDisplayed();
    await expect(HomescreenAndroid.toolbar).toBeDisplayed();
  });
});
