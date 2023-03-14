let interval;

chrome.runtime.onInstalled.addListener(() => {
  interval = setInterval(() => {
    windowsNotify("You have used windows 30 mins");
  }, 30 * 60 * 1000);
});

function windowsNotify(content) {
  console.log(content);
  // 判断浏览器是否支持唤醒
  if (window.Notification) {
    let popNotice = () => {
      if (!Notification.permission === "granted") return;
      const notification = new Notification("JungleTool", {
        body: content,
      });
      // 点击通知的回调函数
      notification.onclick = function () {
        window.open("https://baidu.com");
        notification.close();
      };
    };
    /* 授权过通知 */
    if (Notification.permission === "granted") {
      popNotice();
    } else {
      /* 未授权，先询问授权 */
      Notification.requestPermission(function (permission) {
        popNotice();
      });
    }
  }
}
