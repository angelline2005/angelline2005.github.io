import "./style.scss"
require("../../common/time-left/index.js");

import { elHide, myConsoleLog, __T } from "../../../../globals.js";

const name = "cpe-event";
const event = document.querySelector(".cpe.event");
const titleEvent = event.querySelector(".title");

let addListener = () => {
  myConsoleLog(name, addListener.name); 
  __T('str_tournament_title', { element: titleEvent }).then(
    () => { titleEvent.innerHTML = titleEvent.innerHTML.replace("Huawei", "<p>Huawei</p>") }
  )
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}

init();
myConsoleLog(name, "loaded");

