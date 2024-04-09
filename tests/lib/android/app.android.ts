export default class Page {
  public readonly appId: string;

  constructor() {
    this.appId = "com.example.testapp";
  }

  public async clearApp() {
    await driver.execute("mobile: clearApp", { appId: this.appId });
  }

  public async activateApp() {
    await driver.execute("mobile: activateApp", { appId: this.appId });
  }

  public async terminateApp() {
    await driver.execute("mobile: terminateApp", { appId: this.appId });
  }
}
