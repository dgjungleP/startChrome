import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./main.css";
import { Time } from "./compoment/dashboard";
import { TabInfo } from "./compoment/chrome";

ReactDOM.render(
  <React.StrictMode>
    <Time />
    <TabInfo></TabInfo>
  </React.StrictMode>,
  document.getElementById("root")
);
