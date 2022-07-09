import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./main.css";
import { Time } from "./compoment/dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Time />
  </React.StrictMode>,
  document.getElementById("root")
);
