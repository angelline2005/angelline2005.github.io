import "./style.scss"
import { originPath, myConsoleLog, redirect_to, urlQueryString, varToString } from "../../../../globals.js";


const name = "footer";
const footer = document.querySelector(".cf.footer")

let addListener = () => {
  myConsoleLog(name, addListener.name);
  
}
let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}



init();
myConsoleLog(name, "loaded");

