import moment from "moment";

// Function
function changeToday() {
  var date = new Date();
  var time =
    date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
  var baseTime = 60 * 60 * 24;
  return caculate(time, baseTime);
}
function changeMounth() {
  var baseDate = new Date();
  var dayOfMonth = moment(baseDate).date();
  var baseTime = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    0
  ).getDate();
  return caculate(dayOfMonth, baseTime);
}

function changeYear() {
  var baseDate = new Date();
  var dayOfYear = moment(baseDate).dayOfYear();
  var baseTime = getYearDays(baseDate.getFullYear());
  return caculate(dayOfYear, baseTime);
}
function caculate(time, baseTime) {
  return Math.round((time / baseTime) * 10000) / 100.0;
}

function getYearDays(year) {
  let allDay = 0;
  for (let i = 0; i < 12; i++) {
    allDay += new Date(year, i + 1, 0).getDate();
  }
  return allDay;
}

export { changeToday, changeMounth, changeYear };
