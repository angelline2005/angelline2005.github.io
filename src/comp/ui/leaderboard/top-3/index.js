import "./style.scss";

import { elHide, elShow, myConsoleLog, originPath, redirect_to, urlParams, store_subcribe, store_ACTION_TYPE } from "../../../../globals.js";
import { ls_user } from "../../../js/user";
import { avaImport } from "../../../js/user/user-avatar";

const name = "clt-top-3";

let leaderBoard = null
const top_3 = document.querySelector(".clt.top-3");
const backgroundGroup = top_3.querySelector(".top");

const itemsFirst = backgroundGroup.querySelector(".top-items-1");
const itemsSecond = backgroundGroup.querySelector(".top-items-2");
const itemsThird = backgroundGroup.querySelector(".top-items-3");

const avatarFirst = itemsFirst.querySelector(".avatar");
const avatarImgFirst = avatarFirst.querySelector("img");
const nameFirst = itemsFirst.querySelector(".name");

const avatarSecond = itemsSecond.querySelector(".avatar");
const avatarImgSecond = avatarSecond.querySelector("img");
const nameSecond = itemsSecond.querySelector(".name");

const avatarThird = itemsThird.querySelector(".avatar");
const avatarImgThird = avatarThird.querySelector("img");
const nameThird = itemsThird.querySelector(".name");

const viewLeaderBoard = top_3.querySelector(".btn-view-leaderboard");

let addListener = () => {
  myConsoleLog(name, addListener.name);
  viewLeaderBoard.onclick = (event) => {
    dataLayer.push({
      "event": "ga_event",
      "ga_category": "Huawei tournament",
      "ga_action": "View leaderboard",
      "ga_label": "Home",
      "ga_noninteraction": false
    });
    redirect_to(originPath() + "leaderboard.html");
  }
}
let initData = () => {
  myConsoleLog(name, initData.name);

  const { gameLeaderboard: { list } } = ls_user;
  if (!!list && list.length > 0) {
    elHide(avatarFirst);
    elHide(avatarSecond);
    elHide(avatarThird);
    list.forEach((item, index) => {
      switch (index) {
        case 0:
          avatarImgFirst.src = avaImport["ava" + Number(item?.avatar)];
          nameFirst.innerHTML = item.user_name;
          elShow(avatarFirst, "flex");
          break;
        case 1:
          avatarImgSecond.src = avaImport["ava" + Number(item?.avatar)];
          nameSecond.innerHTML = item.user_name;
          elShow(avatarSecond, "flex");
          break;
        case 2:
          avatarImgThird.src = avaImport["ava" + Number(item?.avatar)];
          nameThird.innerHTML = item.user_name;
          elShow(avatarThird, "flex");
          break;
      }
    });

    elShow(top_3);
  }
  else {
    elHide(top_3);
  }

  const isLeaderBoard = !!window.location.href.includes("leaderboard");
  if (isLeaderBoard) {
    elHide(viewLeaderBoard);
  }
  else {
    elShow(viewLeaderBoard, "inline-block");
  }
}
let eventsLeaderboardFetched = (resJ) => {
  myConsoleLog(name, eventsLeaderboardFetched.name);
  leaderBoard = { ...resJ }
  initData()
  addListener();
}

let init = () => {
  elHide(top_3);
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.USER_eventsLeaderboardFetched, eventsLeaderboardFetched);
}

init();
myConsoleLog(name, "loaded");

