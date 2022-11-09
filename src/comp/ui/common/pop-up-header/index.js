import "./../header/common.scss";
import "./style.scss";
import prizesImg from "./../../index/main-banner/images/main_banner.png";


import {
  myConsoleLog,
  elShow,
  varToString,
  redirect_to,
  originPath,
  elHide,
  stopPropagation,
  urlParams,
  __T,
  store_subcribe,
  store_ACTION_TYPE
} from "../../../../globals";
import { faqsGeneralQuestionsData, faqsPhysicalQuestionsData, prizesData } from "./data";
import { log, ls_user } from "../../../js/user";
import { cli_show } from "../log-in";
let backUrl = originPath() + "index.html"
//test param
let adsv2Path = ""
let debugParam = ""
if (urlParams.get("adsv2") === 'true') adsv2Path = "/test_root_2"
if (urlParams.get("debug") === 'true') debugParam = "&debug=true"
const linkPortal = `https://play.ludigames.com${adsv2Path}?h-sbt=` + encodeURIComponent(backUrl) + debugParam;

const name = "cph-pop-up-header";
const body = document.querySelector("body");
const popUpHeader = body.querySelector(".pop-up-header");

// menu
const menu = popUpHeader.querySelector(".menu-popup");
// menu button

const btnHome = menu.querySelector(".menu-home");
const btnLeaderBoard = menu.querySelector(".menu-leaderboard");

const btnFaqs = menu.querySelector(".menu-faqs");
const btnInfo = menu.querySelector(".menu-contest-info");
const btnTc = menu.querySelector(".menu-terms-conditions");
const btnFrizes = menu.querySelector(".menu-prizes");

const info = popUpHeader.querySelector(".info-popup");
const faqs = popUpHeader.querySelector(".faqs-popup");
const tc = popUpHeader.querySelector(".tc-popup");

const prizes = popUpHeader.querySelector(".prizes-popup");
const prizesContent = prizes.querySelector(".prizes-popup-content");
const prizesContentTpl = prizesContent.querySelector("template");
const prizesImgDiv = prizes.querySelector(".prizes-popup-img img");

const faqsPopupMh = popUpHeader.querySelector(".faqs-popup-mh");
const faqsQuestions = popUpHeader.querySelector(".faqs-popup-questions");
const faqsQuestionsTemp = faqsQuestions.querySelector("template");
const faqsQuestionsPhysical = popUpHeader.querySelector(".faqs-popup-questions-physical");
const faqsQuestionsTempPhysical = faqsQuestionsPhysical.querySelector("template");

const viewOnlineGame = menu.querySelector(".view-more-btn");
const closes = popUpHeader.querySelectorAll(".close");
const playGameBtns = popUpHeader.querySelectorAll(".play-game");

let dataPush = {
  "event": "ga_event",
  "ga_category": "Huawei tournament",
  "ga_action": "Play games",
  "ga_noninteraction": false
}

export let cph_STATE = { // value MUST match with children id
  MENU: 0,
  INFO: 1,
  TC: 2,
  PRIZES: 3,
  FAQS: 4,
};
let state = [];
const children = [
  menu,
  info,
  tc,
  prizes,
  faqs
];
let z_index = 0

export let cph_show = (nextState = -111, params = -1) => {
  myConsoleLog(name, cph_show.name, nextState, params, state[state.length - 1]);
  if (state[state.length - 1] == nextState) return

  state.push(nextState);
  elShow(popUpHeader);
  elShow(children[nextState]);
  children[nextState].style.zIndex = z_index++
};
export let cph_hide = () => {
  myConsoleLog(name, cph_hide.name);
  if (state.length == 0) return

  let current_state = state.pop();
  elHide(children[current_state]);
  if (state.length == 0) elHide(popUpHeader);
};
export let cph_hideAll = () => {
  myConsoleLog(name, cph_hideAll.name);
  elHide(popUpHeader);
  children.forEach((child) => {
    elHide(child);
  });
  state = []
};

const showData = () => {
  faqsGeneralQuestionsData.map((item) => {
    const faqsQuestionsItem = faqsQuestionsTemp.content.lastElementChild.cloneNode(true);
    const faqsQuest = faqsQuestionsItem.querySelector(".question");
    const faqsQuestText = faqsQuestionsItem.querySelector(".question .text");
    const faqsAnswer = faqsQuestionsItem.querySelector(".answer");
    const faqsIcon = faqsQuestionsItem.querySelector(".icon i");

    __T(item.question, { element: faqsQuestText });
    __T(item.answer, { element: faqsAnswer });

    if (typeof faqsQuest !== "undefined" && !!faqsQuest) {
      faqsQuest.onclick = (event) => {
        if (faqsQuest.classList.contains("active")) {
          faqsQuest.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          elHide(faqsAnswer);
        } else {
          checkActive();
          faqsQuest.classList.add("active");
          faqsIcon.style.transform = "rotate(180deg)";
          elShow(faqsAnswer);
        }
      }
    }
    faqsQuestions.appendChild(faqsQuestionsItem);
  });
  faqsPhysicalQuestionsData.map((item) => {
    const faqsQuestionsItemPhysical = faqsQuestionsTempPhysical.content.lastElementChild.cloneNode(true);
    const faqsQuest = faqsQuestionsItemPhysical.querySelector(".question");
    const faqsQuestText = faqsQuestionsItemPhysical.querySelector(".question .text");
    const faqsAnswer = faqsQuestionsItemPhysical.querySelector(".answer");
    const faqsIcon = faqsQuestionsItemPhysical.querySelector(".icon i");

    __T(item.question, { element: faqsQuestText });
    __T(item.answer, { element: faqsAnswer });

    if (typeof faqsQuest !== "undefined" && !!faqsQuest) {
      faqsQuest.onclick = (event) => {
        if (faqsQuest.classList.contains("active")) {
          faqsQuest.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          elHide(faqsAnswer);
        } else {
          checkActive();
          faqsQuest.classList.add("active");
          faqsIcon.style.transform = "rotate(180deg)";
          elShow(faqsAnswer);
        }
      }
    }
    faqsQuestionsPhysical.appendChild(faqsQuestionsItemPhysical);
  });
  const checkActive = () => {
    const faqsQuestionsCheckActive = faqsPopupMh.querySelectorAll(".question");
    if (faqsQuestionsCheckActive.length > 0) {
      faqsQuestionsCheckActive.forEach(btn => {
        const faqsAnswerSel = btn.parentElement.querySelector(".answer");
        const faqsIcon = btn.querySelector(".icon i");
        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          elHide(faqsAnswerSel);
        }

      })
    }
  }
  prizesData.forEach((item) => {
    const prizesItem = prizesContentTpl.content.lastElementChild.cloneNode(true);
    const prizesItemImg = prizesItem.querySelector(".img img");
    const prizesItemOrdinal = prizesItem.querySelector(".ordinal");
    const prizesItemName = prizesItem.querySelector(".name");
    const prizesItemContent = prizesItem.querySelector(".content");
    const prizesItemAboutsHuawei = prizesItem.querySelector(".abouts-huawei a");
    const prizesItemAboutsHuaweiIcon = prizesItem.querySelector(".abouts-huawei i");

    prizesItemImg.src = item.image;
    __T(item.ordinal, { element: prizesItemOrdinal });
    prizesItemName.innerHTML = item.name;
    __T(item.content, { element: prizesItemContent });
    __T(item.btnContent, { element: prizesItemAboutsHuawei });
    prizesItemAboutsHuawei.setAttribute("href", item.btnLink);
    prizesItemAboutsHuaweiIcon.onclick = (event) => {
      window.location.href = item.btnLink;
    }

    prizesContent.appendChild(prizesItem);
  });
}

let addListener = () => {
  myConsoleLog(name, addListener.name);
  prizesImgDiv.src = prizesImg;

  popUpHeader.onclick = (event) => {
    myConsoleLog(name, varToString({ popUpHeader }), "onclick");
    cph_hide();
  }
  children.forEach((child) => {
    child.onclick = (event) => {
      myConsoleLog(name, varToString({ child }), "onclick", child, event);
      stopPropagation(event);
    }
  });
  closes.forEach(close => {
    close.onclick = (event) => {
      myConsoleLog(name, varToString({ close }), "onclick");
      cph_hide();
      console.log("close onclick")
    }
  })
  if (typeof playGameBtns !== "undefined" && !!playGameBtns) {
    const { gameLeaderboard } = ls_user;

    playGameBtns.forEach(playGame => {
      playGame.onclick = (event) => {
        switch (playGame.parentNode.classList[0]) {
          case "info-popup-button":
            dataLayer.push({ ...dataPush, "ga_label": "Info section" });
            break;
          case "tc-popup-button":
            dataLayer.push({ ...dataPush, "ga_label": "Terms section" });
            break;
          case "prizes-popup-button":
            dataLayer.push({ ...dataPush, "ga_label": "Prizes section" });
            break;
          case "faqs-popup-button":
            dataLayer.push({ ...dataPush, "ga_label": "FAQs" });
            break;
          case "menu-popup-button":
            dataLayer.push({ ...dataPush, "ga_action": "Connect to play", "ga_label": "Menu" });
            break;
        }
        myConsoleLog(name, varToString({ playGame }), "onclick");
        if (log.is) {
          redirect_to(originPath() + "game.html");
        } else {
          cli_show();
        }
        cph_hide();
      }
      if (log.is && gameLeaderboard?.score > 0) {
        __T('str_try_again', { element: playGame });
      }
      // logged and don't have image score
      else if (log.is && gameLeaderboard?.score <= 0) {
        __T('btn_play_game', { element: playGame });
      }
      // no logged
    })
  }
  if (typeof viewOnlineGame !== "undefined" && !!viewOnlineGame) {
    viewOnlineGame.onclick = () => {
      dataLayer.push({ ...dataPush, "ga_action": "View all games", "ga_label": "Menu" });
      redirect_to(linkPortal);
    }
  }
  if (typeof btnHome !== "undefined" && !!btnHome) {
    btnHome.onclick = () => {
      redirect_to(
        originPath() + "index.html"
      );
    }
  }
  if (typeof btnLeaderBoard !== "undefined" && !!btnLeaderBoard) {
    btnLeaderBoard.onclick = () => {
      redirect_to(
        originPath() + "leaderboard.html"
      );
    }
  }
  if (typeof btnFaqs !== "undefined" && !!btnFaqs) {
    btnFaqs.onclick = (event) => {
      myConsoleLog(name, varToString({ btnFaqs: btnFaqs }), "onclick");
      cph_show(cph_STATE.FAQS);
    }
  }
  if (typeof btnInfo !== "undefined" && !!btnInfo) {
    btnInfo.onclick = (event) => {
      myConsoleLog(name, varToString({ btnInfo: btnInfo }), "onclick");
      cph_show(cph_STATE.INFO);
    }
  }
  if (typeof btnTc !== "undefined" && !!btnTc) {
    btnTc.onclick = (event) => {
      myConsoleLog(name, varToString({ btnTc: btnTc }), "onclick");
      cph_show(cph_STATE.TC);
    }
  }
  if (typeof btnFrizes !== "undefined" && !!btnFrizes) {
    btnFrizes.onclick = (event) => {
      myConsoleLog(name, varToString({ btnFrizes: btnFrizes }), "onclick");
      cph_show(cph_STATE.PRIZES);
    }
  }

};
let init = () => {
  myConsoleLog(name, init.name);
  showData();
  store_subcribe(store_ACTION_TYPE.USER_logWillNotChange, () => {
    addListener();
  })

};

init();
myConsoleLog(name, "loaded");
