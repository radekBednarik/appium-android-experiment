import AppAndroid from "../lib/android/app.android.js";

class HomescreenAndroid extends AppAndroid {
  get toolbar() {
    return $(
      '//android.view.ViewGroup[@resource-id="com.example.testapp:id/toolbar"]'
    );
  }
}

export default new HomescreenAndroid();
