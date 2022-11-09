import "./style.scss"

import { elHide, myConsoleLog, store_subcribe, store_ACTION_TYPE, redirect_to, originPath, elShow } from "../../../../globals.js";
import { avaImport } from "../../../js/user/user-avatar";

const name = "clls-list-scores";

let leaderBoard = null
const listScores = document.querySelector(".clls.list-scores");
const scoresList = listScores?.querySelector(".scores-list");
const scoresListItem = scoresList.querySelector("template");
const viewPreLbBtn = listScores.querySelector(".view-pre-leaderboard button");

let addListener = () => {
  myConsoleLog(name, addListener.name);  
  viewPreLbBtn.onclick = (event) => {
    redirect_to(originPath() + "pre-leaderboard.html");
  }
  
}
const initData = () => {
  const { list } = leaderBoard;
  if (list.length > 0) {
    list.map((item, index) => {
      if(index > 2){
        const cloneScoresItem = scoresListItem.content.lastElementChild.cloneNode(true);

        const scoresNo = cloneScoresItem.querySelector(".no");
        const scoresAvatar = cloneScoresItem.querySelector(".avatar img");
        const scoresName = cloneScoresItem.querySelector(".name");
        const scoresPoints = cloneScoresItem.querySelector(".points");
  
        scoresNo.innerHTML = (index + 1) < 10 ? ("0" + Number(index + 1)) : Number(index + 1);
        scoresAvatar.src = avaImport["ava" + Number(item.avatar)];
        scoresName.innerHTML = item.user_name;
        scoresPoints.innerHTML = item.score + " pts";
  
        scoresList.appendChild(cloneScoresItem)
      }
    })
  }
}
let eventsLeaderboardFetched = (resJ) => {
  myConsoleLog(name, eventsLeaderboardFetched.name);
  leaderBoard = { ...resJ }
  elShow(listScores)
  initData();
  init_preLbBtn();
}
let init_preLbBtn = () => {
  myConsoleLog(name, init_preLbBtn.name);
  if(window.location.href.includes("pre-leaderboard.html")){
    elHide(viewPreLbBtn);
  } else {
    const { ['pre-list']: preList } = leaderBoard;
    if (!preList || preList.length == 0) {
      elHide(viewPreLbBtn);
    }
  }
}
let init = () => {
  elHide(listScores)
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.USER_eventsLeaderboardFetched, eventsLeaderboardFetched);
  addListener();
  
}

init();
myConsoleLog(name, "loaded");

