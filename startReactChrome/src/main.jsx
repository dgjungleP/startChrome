import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./main.css";
import { Col, Progress, Row } from "antd";

function Time() {
  return (
    <div style={{ width: 500 }}>
      <Row
        justify="center"
        style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}
      >
        <span>Time Progress</span>
      </Row>
      <Row justify="center">
        <ProgressDashboard></ProgressDashboard>
      </Row>
    </div>
  );
}
function ProgressDashboard() {
  const [todayProcess, setTodayProcess] = useState(0);
  const [yearProcess, setYearProcess] = useState(0);
  const [mounthProcess, setMounthProcess] = useState(0);
  const [freshTag, setFreshTag] = useState(false);
  const [timer, setTimer] = useState();
  useEffect(() => {
    fresh();
    setTimer(
      setTimeout(() => {
        setFreshTag(!freshTag);
      }, 1000)
    );
    return () => {
      clearTimeout(timer);
    };
  }, [freshTag]);

  const fresh = () => {
    setTodayProcess(changeToday());
    setYearProcess(changeMounth());
    setMounthProcess(changeYear());
  };
  return (
    <>
      <Row>
        <ProgressWithTitle
          title="Day"
          progress={todayProcess}
        ></ProgressWithTitle>
        <ProgressWithTitle
          title="Mounth"
          progress={mounthProcess}
        ></ProgressWithTitle>
        <ProgressWithTitle
          title="Year"
          progress={yearProcess}
        ></ProgressWithTitle>
      </Row>
    </>
  );
}

function ProgressWithTitle(props) {
  const title = props.title;

  return (
    <>
      <Col className="align-center">
        <Row>
          <Progress
            type="circle"
            percent={props.progress}
            status="active"
            width={80}
            strokeColor={{
              "0%": "#3eede7",
              "100%": "#f05654",
            }}
          ></Progress>
        </Row>
        <Row>
          <span>{title}</span>
        </Row>
      </Col>
    </>
  );
}

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
  var time = baseDate.getDate();
  var baseTime = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    0
  ).getDate();
  return caculate(time, baseTime);
}

function changeYear() {
  var baseDate = new Date();
  var time = baseDate.getDay();
  var baseTime = getYearDays(baseDate.getFullYear());
  return caculate(time, baseTime);
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

ReactDOM.render(
  <React.StrictMode>
    <Time />
  </React.StrictMode>,
  document.getElementById("root")
);
