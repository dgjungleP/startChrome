let interval;

chrome.runtime.onInstalled.addListener(() => {
  interval = setInterval(() => {
    windowsNotify("You have used windows 30 mins");
  }, 30 * 60 * 1000);
});

function windowsNotify(content) {
  console.log(content);
  // 判断浏览器是否支持唤醒
  chrome.notifications.create(
    (Math.random() * 1000).toFixed(0),
    {
      message: content,
      type: "basic",
      title: "HelloJungle",
      iconUrl: "/images/icon-32.png",
    },
    (id) => {
      console.log(id);
    }
  );
}
