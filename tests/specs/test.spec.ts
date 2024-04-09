import { expect } from "@wdio/globals";
import HomescreenAndroid from "../pageobjects/homescreen.android.js";

describe("Test", () => {
  beforeEach(async function () {
    await HomescreenAndroid.clearApp();
    await HomescreenAndroid.activateApp();
  });

  afterEach(async function () {
    await HomescreenAndroid.terminateApp();
  });

  it("app is opened", async function () {
    await expect(await HomescreenAndroid.toolbar).toBeDisplayed();
  });
});
