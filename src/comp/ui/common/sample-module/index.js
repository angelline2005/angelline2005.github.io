import "./style.scss"

import { elHide, myConsoleLog } from "../../../../globals.js";

const name = "c-sample-module";
const sampleModule = document.querySelector(".c.sample-module")

let addListener = () => {
  myConsoleLog(name, addListener.name);  
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}

init();
myConsoleLog(name, "loaded");

