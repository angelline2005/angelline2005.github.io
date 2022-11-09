import "./style.scss"

import { elHide, myConsoleLog, originPath, redirect_to, varToString, urlParams } from "../../../../globals.js";
import gameImg1 from "./images/img.png";
import gameImg2 from "./images/img-1.png";
import gameImg3 from "./images/img-2.png";

const name = "cirtp-redirect-to-portal";
const redirectToPortal = document.querySelector(".cirtp.redirect-to-portal");
const toPortal = redirectToPortal.querySelector(".portal");
const logo = redirectToPortal.querySelector(".logo");
const listGame = toPortal.querySelector(".list-games");
const listGameTemp = listGame.querySelector("template");

const dataGamesList = {gameImg1, gameImg2, gameImg3}

let backUrl = originPath() + "index.html"
//test param
let adsv2Path = ""
let debugParam = ""
if (urlParams.get("adsv2") === 'true') adsv2Path = "/test_root_2"
if (urlParams.get("debug") === 'true') debugParam = "&debug=true"
const linkPortal = `https://play.ludigames.com${adsv2Path}?h-sbt=` + encodeURIComponent(backUrl) + debugParam;

let addListener = () => {
  myConsoleLog(name, addListener.name);
  if(typeof toPortal !== "undefined" && !!toPortal){
    toPortal.onclick = (event) => {
      myConsoleLog(name, varToString({toPortal : toPortal}), "onclick");
      dataLayer.push({
        "event" : "ga_event",
        "ga_category" : "Huawei tournament", 
        "ga_action" : "Click on header",
        "ga_label": "Game icon",
        "ga_noninteraction" : false
      });
      redirect_to(linkPortal);
    }
  }
  if(typeof logo !== "undefined" && !!logo){
    logo.onclick = (event) => {
      myConsoleLog(name, varToString({logo : logo}), "onclick");
      dataLayer.push({
        "event" : "ga_event",
        "ga_category" : "Huawei tournament", 
        "ga_action" : "Click on header",
        "ga_label": "Ludigames logo",
        "ga_noninteraction" : false
      });
      redirect_to(linkPortal)
    }
  }
}
const initShowGame = () => {
  for (const [key, img] of Object.entries(dataGamesList)) {
    const listGameClone = listGameTemp.content.firstElementChild.cloneNode(true);
    const gameImg = listGameClone.querySelector(".img img");
    gameImg.src = img;
    listGame.appendChild(listGameClone);
  }
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
  initShowGame();
}

init();
myConsoleLog(name, "loaded");

