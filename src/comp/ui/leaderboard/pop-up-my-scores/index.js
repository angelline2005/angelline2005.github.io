import "./../../common/header/common.scss";
import "./style.scss";
import scoreImg from "./images/score.jpg"

import {
  myConsoleLog,
  elShow,
  varToString,
  redirect_to,
  originPath,
  elHide,
  stopPropagation,
} from "../../../../globals";


const name = "cpms-pop-up-my-scores";
const body = document.querySelector("body");
const popupMyScores = body.querySelector(".pop-up-my-scores");

const info = popupMyScores.querySelector(".info-popup");
const screenshot = popupMyScores.querySelector(".score-screenshot-popup");

const scoreImgDiv = info.querySelector(".info-popup-img img");
const screenshotImgDiv = screenshot.querySelector(".screenshot img");
const dateUploadScreenshoot = screenshot.querySelector(".date");

const closes = popupMyScores.querySelectorAll(".close");
const playGameBtns = popupMyScores.querySelectorAll(".play-game");

export let cpms_STATE = { // value MUST match with children id
  INFO: 0,
  SCREENSHOT: 1
};
let state = [];
const children = [
  info,
  screenshot
];
let z_index = 0

export let cpms_show = (nextState = -111, params = -1) => {
  myConsoleLog(name, cpms_show.name, nextState, params, state[state.length - 1]);
  if (state[state.length - 1] == nextState) return

  state.push(nextState);
  elShow(popupMyScores);
  elShow(children[nextState]);
  children[nextState].style.zIndex = z_index++;
  if(nextState == cpms_STATE.SCREENSHOT){
    const {base64image, score_date} = params
    screenshotImgDiv.src = base64image;
    if(!!score_date){
      dateUploadScreenshoot.innerHTML = "Uploaded on " + score_date;
    }
    else{
      elHide(dateUploadScreenshoot);
    }
  }
};
export let cpms_hide = () => {
  myConsoleLog(name, cpms_hide.name);
  if (state.length == 0) return

  let current_state = state.pop();
  elHide(children[current_state]);
  if (state.length == 0) elHide(popupMyScores);
};
export let cpms_hideAll = () => {
  myConsoleLog(name, cpms_hideAll.name);
  elHide(popupMyScores);
  children.forEach((child) => {
    elHide(child);
  });
  state = []
};


let addListener = () => {
  myConsoleLog(name, addListener.name);
  scoreImgDiv.src = scoreImg;

  popupMyScores.onclick = (event) => {
    myConsoleLog(name, varToString({ popupMyScores }), "onclick");
    cpms_hide();
  }
  children.forEach((child) => {
    child.onclick = (event) => {
      myConsoleLog(name, varToString({ child }), "onclick", child, event);
      stopPropagation(event);
    }
  });
  if (typeof closes !== undefined || !!closes) {
    closes.forEach(close => {
      close.onclick = (event) => {
        myConsoleLog(name, varToString({ close }), "onclick");
        cpms_hide();
      }
    })
  }
  if (typeof playGameBtns !== undefined || !!playGameBtns) {
    playGameBtns.forEach(playGame => {
      playGame.onclick = (event) => {
        redirect_to(originPath() + "game.html");
        myConsoleLog(name, varToString({ playGame }), "onclick");
        cpms_hide();
      }
    })
  }
};
let init = () => {
  myConsoleLog(name, init.name);
  addListener();
};

init();
myConsoleLog(name, "loaded");
