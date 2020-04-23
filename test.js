import React from "react";
import ReactDom from "react-dom";
import Cron from "./src/index";
console.log(Cron);
ReactDom.render(<Cron showRunTime/>, document.getElementById("app"));
