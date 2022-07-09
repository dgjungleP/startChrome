import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Col, Progress, Row } from "antd";
import { changeMounth, changeToday, changeYear } from "../utils/date.js";
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
    setYearProcess(changeYear());
    setMounthProcess(changeMounth());
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

export { Time };
