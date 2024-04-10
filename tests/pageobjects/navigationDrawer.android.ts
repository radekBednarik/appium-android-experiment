import { $ } from "@wdio/globals";
import AppAndroid from "../lib/android/app.android.js";

class NavigationDrawerAndroid extends AppAndroid {
  get itemHome() {
    return $(
      'android=new UiSelector().resourceId("com.example.testapp:id/nav_home")'
    );
  }

  get self() {
    return $(
      'android=new UiSelector().resourceId("com.example.testapp:id/nav_view")'
    );
  }

  public async clickHome() {
    await (this.itemHome).click();
  }
}

export default new NavigationDrawerAndroid();
