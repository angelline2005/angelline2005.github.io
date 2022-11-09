import "./style.scss";
import { elHide, elShow, myConsoleLog, originPath, redirect_to, varToString, store_subcribe, store_ACTION_TYPE, __T } from "../../../../globals.js";
import { cpms_STATE, cpms_show } from "../pop-up-my-scores/index";
import { ls_user, log } from "../../../js/user";
import { cli_show } from "../../common/log-in";

const name = "clmr-my-scores";
const myScores = document.querySelector(".clms.my-scores");

const inforMyScore = myScores.querySelector(".infor");
const playGame = myScores.querySelectorAll(".play-game");
const bestScoresTop = myScores.querySelector(".best-scores-img-top");
const bestScoresImgTop = bestScoresTop.querySelector("img");
const bestScores = myScores.querySelector(".best-scores");
const bestScoresImg = bestScores.querySelector(".best-scores-img img");
const bestScoresDate = myScores.querySelector(".best-scores-date");


let initMyScores = () => {
  myConsoleLog(name, initMyScores.name);
  myScores.style.marginBottom = myScoresMb();
  playGame.forEach(btnPlay => {
    btnPlay.onclick = (event) => {
      // check login
      if (log.is) {
        dataLayer.push({
          "event": "ga_event",
          "ga_category": "Huawei tournament",
          "ga_action": "Play Game",
          "ga_label": "Home",
          "ga_noninteraction": false
        });
        redirect_to(originPath() + "game.html");
      } else {
        dataLayer.push({
          "event": "ga_event",
          "ga_category": "Huawei tournament",
          "ga_action": "Connect to play",
          "ga_label": "Home",
          "ga_noninteraction": false
        });
        cli_show();
      }
    }
  })
  inforMyScore.onclick = (event) => {
    cpms_show(cpms_STATE.INFO);
  }
  const { gameLeaderboard } = ls_user;
  bestScoresImg.onclick = (event) => {
    myConsoleLog(name, varToString({ bestScoresImg }), event);
    cpms_show(cpms_STATE.SCREENSHOT, { base64image: gameLeaderboard.screen_shoot, score_date: !!gameLeaderboard?.score_date && momentTime(gameLeaderboard?.score_date) });
  }
  bestScoresImgTop.onclick = (event) => {
    myConsoleLog(name, varToString({ bestScoresImgTop }), event);
    cpms_show(cpms_STATE.SCREENSHOT, { base64image: gameLeaderboard.screen_shoot, score_date: !!gameLeaderboard?.score_date && momentTime(gameLeaderboard?.score_date) });
  }
  // logged and have image score
  if (log.is && gameLeaderboard?.score > 0) {
    if (window.location.href.includes("profile")) {
      elHide(playGame[0]);
      elShow(bestScores);
      bestScoresImg.src = gameLeaderboard.screen_shoot;
      elHide(bestScoresTop);
    } else {
      elHide(bestScores);
      elHide(inforMyScore);
      bestScoresImgTop.src = gameLeaderboard.screen_shoot;
      elShow(bestScoresTop);
      __T('str_try_again', { element: playGame[0] });
    }
  }
  // logged and don't have image score
  else if (log.is && gameLeaderboard?.score <= 0) {
    elHide(bestScores);
    elHide(bestScoresTop);
    __T('btn_play_game', { element: playGame[0] });
  }
  // no logged
  else {
    elHide(bestScores);
    elHide(bestScoresTop);
    __T('btn_connect', { element: playGame[0] });
  }

  if (!!gameLeaderboard?.score_date) {
    bestScoresDate.innerHTML = "Uploaded on " + momentTime(gameLeaderboard?.score_date);
  }
  else{
    elHide(bestScoresDate);
  }
  elShow(myScores);
}

const myScoresMb = () => {
  if (window.location.href.includes("leaderboard")) {
    return 0
  }
  else if (window.location.href.includes("profile")) {
    return "85px"
  }
  else {
    return "8px"
  }
}

const momentTime = (time) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(Number(time)).toLocaleDateString('en-US', options);
}

let init = () => {
  myConsoleLog(name, init.name);
  elHide(myScores);
  store_subcribe(store_ACTION_TYPE.USER_rankLeaderboardFetched, () => {
    store_subcribe(store_ACTION_TYPE.USER_logWillNotChange , initMyScores)
  })
  
}

init();
myConsoleLog(name, "loaded");