import "./style.scss"

import { elHide, myConsoleLog, store_ACTION_TYPE, store_subcribe } from "../../../../globals.js";
import clock from "./images/clock.png";
import { ls_user } from "../../../js/user";


const name = "ctl-time-left";
const timeLeft = document.querySelector(".ctl.time-left");
const container = timeLeft.querySelector(".time-left-container");
const resetImg = container.querySelector(".clock");
const timer = container.querySelector(".timer");
const date = timeLeft?.querySelector(".date");
const title = timeLeft?.querySelector(".title");
const currentTourTitle = timeLeft?.querySelector(".current-tour");


let addListener = () => {
  myConsoleLog(name, addListener.name);
  initTimer();
}
const initTimer = () => {
  const { gameLeaderboard } = ls_user;
  // check next_time
  if (!!date && !!title) {
    if (!!gameLeaderboard?.next_time && gameLeaderboard?.next_time !== 0) {
      date.innerHTML = momentTime(gameLeaderboard?.next_time);
    }
    else {
      elHide(date);
      elHide(title);
    }
  }
  // check end_time 
  if (!!gameLeaderboard.end_time && (gameLeaderboard.end_time - new Date().getTime()) > 0) {
    countDown(timer);
  }
  else {
    elHide(timer);
    elHide(currentTourTitle);
  }
  // check start_time
  if (!!gameLeaderboard.start && gameLeaderboard.start > new Date().getTime()) {
    if (!!timer && !!currentTourTitle) {
      elHide(timer);
      elHide(currentTourTitle);
    }

  }
}
const momentTime = (time) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(Number(time)).toLocaleDateString('en-us', options);
}

const countDown = (timer) => {
  myConsoleLog(name, countDown.name);
  resetImg.src = clock;

  timer.tick = null;
  timer.duration = { dd: -1, hh: -1, mm: -1, ss: -1 }
  if (timer.tick == null) {
    const { gameLeaderboard } = ls_user;
    if (!!gameLeaderboard.end_time) {
      const endTime = gameLeaderboard.end_time;

      timer.tick = window.setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds

        if (distance < 0) {
          clearInterval(timer.tick);
          elHide(timer);
        }
      }, 1000);

    }
  }
}

let eventsLeaderboardFetched = () => {
  myConsoleLog(name, eventsLeaderboardFetched.name);
  addListener();
}
let init = () => {
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.USER_eventsLeaderboardFetched, eventsLeaderboardFetched);
}

init();
myConsoleLog(name, "loaded");

