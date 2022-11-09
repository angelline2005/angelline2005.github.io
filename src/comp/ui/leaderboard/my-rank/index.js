import "./style.scss";

import player from "../top-3/images/player.svg";

import { loadLS, myConsoleLog, store_subcribe, store_ACTION_TYPE, elHide, elShow } from "../../../../globals.js";
import { ls_user } from "../../../js/user";
import { avaImport } from "../../../js/user/user-avatar";


export const rankCode = {
  greaterThanOneHundred : -1,
}

const name = "clmr-my-rank";

const myRank = document.querySelector(".clmr.my-rank");
const avatarImg = myRank.querySelector(".profile .avatar img");
const nameUser = myRank.querySelector(".name");
const rankText = myRank.querySelector(".rank .text");
const gameText = myRank.querySelector(".game .text");

let addListener = () => {
  myConsoleLog(name, addListener.name);
  const { tp_user_info: { displayName }, gameLeaderboard: { rank, score, avatar } } = ls_user;
  avatarImg.src = avaImport["ava" + Number(avatar)];
  nameUser.innerHTML = displayName;
  rankText.innerHTML = (rank === rankCode.greaterThanOneHundred ? ">100th place"  : rank );
  gameText.innerHTML = score + " pts";
  elShow(myRank);
}
let rankLeaderboardFetched = (resJ) => {
  myConsoleLog(name, rankLeaderboardFetched.name);
  addListener();
}

let init = () => {
  elHide(myRank);
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.USER_rankLeaderboardFetched, rankLeaderboardFetched);  
}
init();
myConsoleLog(name, "loaded");

