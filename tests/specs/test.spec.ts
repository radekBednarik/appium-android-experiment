import { driver, expect } from "@wdio/globals";

describe("Settings Screen Test", () => {
  it("should open the Settings screen", async () => {
    // Example: Locating and clicking on the settings button

    // Example: Checking if the Settings screen is displayed
    await driver.execute("mobile: activateApp", {
      appId: "com.google.android.gm",
    });
  });
});
