import "./style.scss"

import { elHide, myConsoleLog } from "../../../../globals.js";
require("../../common/time-left/index.js");

const name = "cli-infor";
const infor = document.querySelector(".cli.infor");


let addListener = () => {
  myConsoleLog(name, addListener.name);  
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}

init();
myConsoleLog(name, "loaded");

