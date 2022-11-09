import "./style.scss"

import { elHide, myConsoleLog } from "../../../../globals.js";
import { cph_STATE, cph_show, cph_hide, cph_hideAll } from "../../common/pop-up-header/index";



const name = "cib-infor-button";
const inforButton = document.querySelector(".cib.infor-button");
const btnPopup = inforButton.querySelector(".btn-popup");
const btnPopupList = btnPopup.querySelectorAll(".btn-popup button");

let addListener = () => {
  myConsoleLog(name, addListener.name); 
  if (typeof btnPopupList !== undefined || !!btnPopupList) {
    btnPopupList.forEach((btns, key) => {
      btns.onclick = () => {
        switch (key + 1) {
          case 1:
            cph_show(cph_STATE.INFO)
            break;
          case 2:
            cph_show(cph_STATE.TC)
            break;
          case 3:
            cph_show(cph_STATE.PRIZES)
            break;
          case 4:
            cph_show(cph_STATE.FAQS)
            break;
        }
      }
    })
  } 
}

let init = () => {
  myConsoleLog(name, init.name);
  addListener();
}

init();
myConsoleLog(name, "loaded");

