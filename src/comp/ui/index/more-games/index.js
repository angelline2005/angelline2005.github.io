import "./style.scss"

import { elHide, myConsoleLog, redirect_to, store_ACTION_TYPE, store_subcribe, varToString, originPath, urlParams } from "../../../../globals.js";
import { user_playGame } from "../../../js/user";
import { observe } from "../../../js/lazy-img/index.js";

const name = "cimg-more-game";
const moreGame = document.querySelector(".cimg.more-game");
const toPortal = moreGame.querySelector(".to-portal");
const listGame = moreGame.querySelector(".list-games");
const listGameTemp = listGame.querySelector("template");


let backUrl = originPath() + "index.html"
//test param
let adsv2Path = ""
let debugParam = ""
if (urlParams.get("adsv2") === 'true') adsv2Path = "/test_root_2"
if (urlParams.get("debug") === 'true') debugParam = "&debug=true"
const linkPortal = `https://play.ludigames.com${adsv2Path}?h-sbt=` + encodeURIComponent(backUrl) + debugParam;

let products = null;

let addListener = () => {
  myConsoleLog(name, addListener.name);
  if (typeof toPortal !== "undefined" && !!toPortal) {
    toPortal.onclick = (event) => {
      myConsoleLog(name, varToString({ toPortal: toPortal }), "onclick");
      dataLayer.push({
        "event" : "ga_event",
        "ga_category" : "Huawei tournament", 
        "ga_action" : "View all games",
        "ga_label": "Home",
        "ga_noninteraction" : false
      });
      redirect_to(linkPortal)
    }
  }
  moveX(listGame);
  
}
const initShowGame = () => {

  for (const [key, product] of Object.entries(products)) {
    if (key < 9) {
      const listGameClone = listGameTemp.content.firstElementChild.cloneNode(true);
      const gameImg = listGameClone.querySelector(".img img");
      gameImg.setAttribute("data-src", product.image);
      observe([gameImg]);
      // gameImg.src = product.image;
      listGameClone.onclick = (event) => {
        user_playGame(event, { pID: product.pID, name: product.name, link: product.link });
      }
      listGame.appendChild(listGameClone);
    }
  }
}

const moveX = (parent) => {
  const slider = parent;
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });

}

let productFetchedHandler = (resJ) => {
  myConsoleLog(name, productFetchedHandler.name);
  products = { ...resJ.products }
  addListener();
  initShowGame();
}

let init = () => {
  myConsoleLog(name, init.name);
  store_subcribe(store_ACTION_TYPE.INDEX_productFetched, productFetchedHandler);
}



init();
myConsoleLog(name, "loaded");

