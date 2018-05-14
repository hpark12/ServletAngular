$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/batches_tab_batch_ordering.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Michael Sikorski"
    },
    {
      "line": 2,
      "value": "#Feature: Ordering of batches in the Batches tab"
    }
  ],
  "line": 4,
  "name": "Ordering of batches in Batches tab",
  "description": "\r\nI want to order batches according to start date,\r\nend date, room, building, location, trainer/cotrainer, \r\nfocus, curriculum, or name (ascending and descending order).",
  "id": "ordering-of-batches-in-batches-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@BatchesTabOrderingTest"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Logging in",
  "description": "",
  "id": "ordering-of-batches-in-batches-tab;logging-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I have just logged in(batches)",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I clicked on the Batches tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Browser should land on the batches page",
  "keyword": "Then "
});
formatter.match({
  "location": "testBatchesTab.i_have_just_logged_in_batches()"
});
formatter.result({
  "duration": 3126767109,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:08.638Z\u0027\nSystem info: host: \u0027DESKTOP-AMM7699\u0027, ip: \u0027192.168.0.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\azncd\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: d433abb397a99438ed8155a7743f9f4c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat com.worldgate.test.batchesTab.testBatchesTab.i_have_just_logged_in_batches(testBatchesTab.java:148)\r\n\tat ✽.Given I have just logged in(batches)(src/test/resources/batches_tab_batch_ordering.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "testBatchesTab.i_clicked_on_the_Batches_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "testBatchesTab.browser_should_land_on_the_batches_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Redirected to batches page",
  "description": "",
  "id": "ordering-of-batches-in-batches-tab;redirected-to-batches-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I just landed on the Batches page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "batches should be in ascending order according to start date",
  "keyword": "Then "
});
formatter.match({
  "location": "testBatchesTab.i_just_landed_on_the_Batches_page()"
});});
