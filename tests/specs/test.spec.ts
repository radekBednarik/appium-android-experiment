import { driver, expect } from "@wdio/globals";

describe("Settings Screen Test", () => {
  it("should open the Settings screen", async () => {
    // Example: Locating and clicking on the settings button
    const settingsButton = await driver.$('//[@id="settings-button"]');
    await settingsButton.click();

    // Example: Checking if the Settings screen is displayed
    const settingsScreen = await driver.$('//[@id="settings-screen"]');
    const isDisplayed = await settingsScreen.isDisplayed();
    expect(isDisplayed).toBe(true);
  });
});
