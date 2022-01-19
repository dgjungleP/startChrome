let today = document.getElementById("todayMeter");
let mounth = document.getElementById("mounthMeter");
let year = document.getElementById("yearMeter");

let todayProcess = document.getElementById("todayProcess");
let mounthProcess = document.getElementById("mounthProcess");
let yearProcess = document.getElementById("yearProcess");
let workDelay = document.getElementById("workDelay");
let work = document.getElementById("work");

function caculate(time, baseTime) {
  return Math.round((time / baseTime) * 1000000) / 1000000.0;
}
function getYearDays(year) {
  let allDay = 0;
  for (let i = 0; i < 12; i++) {
    allDay += new Date(year, i + 1, 0).getDate();
  }
  return allDay;
}

function changeValue(meter, value, process) {
  meter.value = value;
  let timeValue = value * 100 + "";
  const pointIndex = timeValue.indexOf(".");
  process.innerText =
    timeValue.substring(0, pointIndex) +
    timeValue.substring(pointIndex, pointIndex + 3) +
    "%";
}
function changeToday() {
  var date = new Date();
  var time =
    date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
  var baseTime = 60 * 60 * 24;
  changeValue(today, caculate(time, baseTime), todayProcess);
}
function changeMounth() {
  var baseDate = new Date();
  var time = baseDate.getDate();
  var baseTime = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    0
  ).getDate();
  changeValue(mounth, caculate(time, baseTime), mounthProcess);
}

function changeYear() {
  var baseDate = new Date();
  var time = baseDate.getDay();
  var baseTime = getYearDays(baseDate.getFullYear());
  changeValue(year, caculate(time, baseTime), yearProcess);
}
function changeDelay() {
  chrome.storage.sync.get("time", ({ time }) => {
    const maxTime = 9 * 60 * 60;
    const delayTime = Math.round(
      maxTime - (new Date().getTime() - time) / 1000
    );
    const hour = Math.floor(delayTime / (60 * 60));
    const minus = Math.floor((delayTime / 60) % 60);
    const sec = Math.round(delayTime % 60);
    workDelay.innerText = hour + " h " + minus + " m " + sec + " s";
  });
}

work.addEventListener("click", async () => {
  const date = new Date();
  const time = date.getTime();
  chrome.storage.sync.get("day", ({ day }) => {
    debugger;
    if (date.getDay() != day) {
      chrome.storage.sync.set({ time, day: date.getDay() });
    }
  });
});

changeToday();
changeMounth();
changeYear();
changeDelay();
setInterval(changeToday, 1000);
setInterval(changeMounth, 1000);
setInterval(changeYear, 1000);
setInterval(changeDelay, 1000);
