import { driver, expect, $ } from "@wdio/globals";

describe("Test", () => {
  beforeEach(async function () {
    await driver.execute("mobile: clearApp", { appId: "com.example.testapp" });
    await driver.execute("mobile: activateApp", {
      appId: "com.example.testapp",
    });
  });

  afterEach(async function () {
    await driver.execute("mobile: terminateApp", {
      appId: "com.example.testapp",
    });
  });

  it("app is opened", async function () {
    const toolbar = await $(
      '//android.view.ViewGroup[@resource-id="com.example.testapp:id/toolbar"]'
    );

    await expect(toolbar).not.toBeDisplayed();
  });
});
