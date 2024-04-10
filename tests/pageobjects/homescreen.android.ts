import { $ } from "@wdio/globals";
import AppAndroid from "../lib/android/app.android.js";

class HomescreenAndroid extends AppAndroid {
  get toolbar() {
    return $(
      '//android.view.ViewGroup[@resource-id="com.example.testapp:id/toolbar"]'
    );
  }

  get navigationDrawer() {
    return $('android=new UiSelector().description("Open navigation drawer")');
  }

  public async openNavigationDrawer() {
    await (this.navigationDrawer).click()
  }
}

export default new HomescreenAndroid();
