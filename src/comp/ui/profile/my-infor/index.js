import "./style.scss"

import { elHide, myConsoleLog, varToString } from "../../../../globals.js";
import {cpmi_STATE, cpmi_show} from "../pop-up-my-infor/index";
import { logOut, ls_user } from "../../../js/user";

const name = "cpmi-my-infor";
const myInfor = document.querySelector(".cpmi.my-infor");
// const btnEditEmail = myInfor.querySelector(".btn-edit");
const btnLogOut = myInfor.querySelector(".logout");
const email = myInfor.querySelector(".email");

let addListener = () => {
  myConsoleLog(name, addListener.name);
  if(!!ls_user.tp_user_info.email){
    email.innerHTML = ls_user.tp_user_info.email;
  }
  else{
    elHide(email);
  }

  // if(typeof btnEditEmail !== undefined || !!btnEditEmail){
  //   btnEditEmail.onclick = () => {
  //     cpmi_show(cpmi_STATE.EDIT);
  //   }
  // }
  btnLogOut.onclick = () => {
    myConsoleLog(name, varToString({btnLogOut}), "click"); 
    logOut()
  }
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}

init();
myConsoleLog(name, "loaded");

