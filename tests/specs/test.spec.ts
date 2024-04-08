import { driver, expect } from "@wdio/globals";

describe("Settings Screen Test", () => {
  it("should open the Settings screen", async () => {
    // Example: Locating and clicking on the settings button

    // Example: Checking if the Settings screen is displayed
    await driver.execute("mobile: shell", {
      command: "am start -n com.android.settings/.Settings",
    });

    const settingsButton = await driver.$('//[@id="settings-button"]');
    await settingsButton.click();

    const settingsScreen = await driver.$('//[@id="settings-screen"]');
    const isDisplayed = await settingsScreen.isDisplayed();
    expect(isDisplayed).toBe(true);
  });
});
