import "./common.scss";
import "./style.scss";
import "./fontawesome-free-6.1.1-web/css/fontawesome.css";
import "./fontawesome-free-6.1.1-web/css/solid.css";

import {
  myConsoleLog,
  elShow,
  varToString,
  redirect_to,
  originPath,
  elHide,
} from "../../../../globals";
import { cph_STATE, cph_show, cph_hide, cph_hideAll } from "../pop-up-header/index";

import { cli_show } from "../log-in";
import { log } from "../../../js/user";
const name = "ch-header";
const body = document.querySelector("body");
const header = body.querySelector(".ch.header");
const icon = header.querySelector(".icon");
const buttonsEl = header.querySelector(".buttons");
const btn_leaderboard = buttonsEl.querySelector(".leaderboard");
const btn_profile = buttonsEl.querySelector(".profile");
const btn_menu = buttonsEl.querySelector(".menu");
const menu_bars = btn_menu.querySelector(".fa-bars");
const menu_xmark = btn_menu.querySelector(".fa-xmark");

let addListener = () => {
  myConsoleLog(name, addListener.name);

  btn_leaderboard.onclick = (event) => {
    myConsoleLog(name, varToString({btn_leaderboard}), "click");
    dataLayer.push({
      "event" : "ga_event",
      "ga_category" : "Huawei tournament", 
      "ga_action" : "Click on menu",
      "ga_label": "Leaderboard icon",
      "ga_noninteraction" : false
    });
    redirect_to(originPath() + "leaderboard.html");
  }  
  btn_profile.onclick = (event) => {
    myConsoleLog(name, varToString({btn_profile}), "click");
    dataLayer.push({
      "event" : "ga_event",
      "ga_category" : "Huawei tournament", 
      "ga_action" : "Click on menu",
      "ga_label": "Profile  icon",
      "ga_noninteraction" : false
    });
    if (log.is) {
      redirect_to(originPath() + "profile.html");
    } else {
      cli_show();
    }
  }
  btn_menu.onclick = (event) => {
    myConsoleLog(name, varToString({btn_menu}), "click");
    dataLayer.push({
      "event" : "ga_event",
      "ga_category" : "Huawei tournament", 
      "ga_action" : "Click on menu",
      "ga_label": "Burger Menu  icon",
      "ga_noninteraction" : false
    });
    const menu_class = btn_menu.classList;
    if (menu_class.contains("active")) {
      resetButtons() 
      
      cph_hideAll();  
    } else { 
      menu_class.add("active");
      elShow(menu_xmark);
      elHide(menu_bars);
      cph_show(cph_STATE.MENU);
    }    
  }  
  icon.onclick = (event) => {
    myConsoleLog(name, varToString({ icon }), "click");
    redirect_to(originPath() + "index.html");
  }

};
let resetButtons = () => {
  myConsoleLog(name, resetButtons.name);    
  if (window.location.href.includes("leaderboard")) btn_leaderboard.classList.add("active");
  if (window.location.href.includes("profile")) btn_profile.classList.add("active");

  btn_menu.classList.remove("active")
  elShow(menu_bars);
  elHide(menu_xmark);
}
let init = () => {
  myConsoleLog(name, init.name);
  resetButtons()
  addListener();
  body.style.visibility = "visible";
};

init();
myConsoleLog(name, "loaded");
