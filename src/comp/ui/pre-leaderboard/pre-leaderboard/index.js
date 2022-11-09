import "./style.scss"

import { elHide, myConsoleLog, store_subcribe, store_ACTION_TYPE } from "../../../../globals.js";
require("../../common/time-left/index.js");
import { avaImport } from "../../../js/user/user-avatar";

const name = "plpl-pre-leaderboard";
const preLeaderboard = document.querySelector(".plpl.pre-leaderboard");
const scoresList = preLeaderboard.querySelector(".scores-list");
const scoresListItem = scoresList.querySelector("template");


let leaderBoard = null;

let addListener = () => {
  myConsoleLog(name, addListener.name);
  const {['pre-list']: preList, end_time} = leaderBoard;
  if (!!preList && preList?.length > 0) {
    preList.map((item, index) => {
      const cloneScoresItem = scoresListItem.content.lastElementChild.cloneNode(true);

      const scoresNo = cloneScoresItem.querySelector(".no");
      const scoresAvatar = cloneScoresItem.querySelector(".avatar img");
      const scoresName = cloneScoresItem.querySelector(".name");
      const scoresPoints = cloneScoresItem.querySelector(".points");

      scoresNo.innerHTML = (1 + index) < 10 ? ("0" + Number(1 + index)) : Number(1 + index);
      scoresAvatar.src = avaImport["ava" + Number(item.avatar)];;
      scoresName.innerHTML = item.user_name;
      scoresPoints.innerHTML = item.score + " pts";

      scoresList.appendChild(cloneScoresItem)
    })
  }
}

let eventsLeaderboardFetched = (resJ) => {
  myConsoleLog(name, eventsLeaderboardFetched.name);
  leaderBoard = { ...resJ }
  addListener();
}
let init = () => {
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.USER_eventsLeaderboardFetched, eventsLeaderboardFetched);
}

init();
myConsoleLog(name, "loaded");

