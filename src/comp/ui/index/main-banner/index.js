import "./style.scss";
import banner from "./images/main_banner.png";
require("../../common/time-left/index.js");

import { myConsoleLog, originPath, redirect_to, varToString, store_subcribe, store_ACTION_TYPE, __T } from "../../../../globals.js";
import { log } from "../../../js/user";
import { cli_show } from "../../common/log-in";

const name = "cimb-main-banner";
const mainBanner = document.querySelector(".cimb.main-banner");
const playGameInfor = mainBanner.querySelector(".information-play-game");

const title = playGameInfor.querySelector(".title");
const bannerImg = mainBanner.querySelector(".banner-img img");
const playGame = mainBanner.querySelector(".play-game");

let addListener = () => {
  myConsoleLog(name, addListener.name);

  if (!!playGame) {
    playGame.onclick = (event) => {
      myConsoleLog(name, varToString({ playGame }), event, "onclick");
      dataLayer.push({
        "event": "ga_event",
        "ga_category": "Huawei tournament",
        "ga_action": "Play Game",
        "ga_label": "Home",
        "ga_noninteraction": false
      });

      if (log.is) {
        redirect_to(originPath() + "game.html");
      }
      else {
        cli_show();
      }
    }
  }
}

let init = () => {
  myConsoleLog(name, init.name);
  bannerImg.src = banner;
  __T('str_tournament_title', { element: title }).then(
    () => { title.innerHTML = title.innerHTML.replace("Huawei", "<p>Huawei</p>") }
  )

  store_subcribe(store_ACTION_TYPE.USER_logWillNotChange, addListener)
}

init();
myConsoleLog(name, "loaded");

