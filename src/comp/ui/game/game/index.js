import "./style.scss";

import { myConsoleLog, urlParams, store_subcribe, store_ACTION_TYPE, localhost } from "../../../../globals";
import { gameLeaderboard_valid, ls_user, user_saveLS } from "../../../js/user";

const name = "g-game";
const gg = document.querySelector(".gg.game");
const g_game_frame = document.getElementById("game-frame");
window.g_window = g_game_frame.contentWindow





let addListener = () => {
  myConsoleLog(name, addListener.name);
};

let updateIFrameSrc = () => {
  myConsoleLog(name, updateIFrameSrc.name);

  let cdn_server = "//cdn.ludigames.com/"
  let link = "h5-partner/huawei/sbt/skyBridgeFree/";
  if (localhost.is
    || (urlParams.has("test-game") && urlParams.get("test-game") === 'true')) {
    link = "h5-partner/huawei/sbt/test18/skyBridgeFree/?debug=true"
  }
  const final_link = cdn_server + link;
  g_game_frame.src = final_link;

  // check valid
  let { gameLeaderboard } = ls_user
  const { gameNeedReset } = gameLeaderboard
  if (gameNeedReset) {
    g_game_frame.onload = () => {
      myConsoleLog(name, "g_game_frame.onload");
      g_window.postMessage({
        action: "portal-new-leaderboard-id",
      }, '*')
    }
    
    // last, save LS
    gameLeaderboard = { ...gameLeaderboard, gameNeedReset: false}
    user_saveLS({ gameLeaderboard })
  }
};

let initIFrame = () => {
  myConsoleLog(name, initIFrame.name);
  updateIFrameSrc();
};
let init = () => {
  myConsoleLog(name, init.name);
  initIFrame();
  addListener();
  // store_subcribe(store_ACTION_TYPE.USER_playGame_saveDatabase, takeshot);

};
init();
myConsoleLog(name, "loaded");
