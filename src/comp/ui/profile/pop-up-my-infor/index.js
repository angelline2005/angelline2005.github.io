import "./../../common/header/common.scss";
import "./style.scss";

import {
  myConsoleLog,
  elShow,
  varToString,
  redirect_to,
  originPath,
  urlParams,
  elHide,
  stopPropagation,
} from "../../../../globals";


const name = "cpmi-pop-up-my-infor";
const body = document.querySelector("body");
const popupMyInfor = body.querySelector(".pop-up-my-infor");

const edit = popupMyInfor.querySelector(".edit-popup");
const closes = popupMyInfor.querySelectorAll(".close");

const formEdit = edit.querySelector(".form-edit");
const editBtn = edit.querySelector(".login-btn button");

const formEditEmail = edit.querySelector("#email-edit");
const formEditPassword = edit.querySelector("#password-edit");


export let cpmi_STATE = { // value MUST match with children id
  EDIT: 0,
};
let state = [];
const children = [
  edit,
];
let z_index = 0

export let cpmi_show = (nextState = -111, params = -1) => {
  myConsoleLog(name, cpmi_show.name, nextState, params, state[state.length - 1]);
  if (state[state.length - 1] == nextState) return

  state.push(nextState);
  elShow(popupMyInfor);
  elShow(children[nextState]);
  children[nextState].style.zIndex = z_index++;
};
export let cpmi_hide = () => {
  myConsoleLog(name, cpmi_hide.name);
  if (state.length == 0) return

  let current_state = state.pop();
  elHide(children[current_state]);
  if (state.length == 0) elHide(popupMyInfor);
};
export let cpmi_hideAll = () => {
  myConsoleLog(name, cpmi_hideAll.name);
  elHide(popupMyInfor);
  children.forEach((child) => {
    elHide(child);
  });
  state = []
};


let addListener = () => {
  myConsoleLog(name, addListener.name);

  popupMyInfor.onclick = (event) => {
    myConsoleLog(name, varToString({ popupMyInfor }), "onclick");
    cpmi_hide();
  }
  children.forEach((child) => {
    child.onclick = (event) => {
      myConsoleLog(name, varToString({ child }), "onclick", child, event);
      stopPropagation(event);
    }
  });
  if (typeof closes !== undefined || !!closes) {
    closes.forEach(close => {
      close.onclick = (event) => {
        myConsoleLog(name, varToString({ close }), "onclick");
        cpmi_hide();
      }
    })
  }
  editBtn.disabled = true;

  formEdit.addEventListener("submit", function (event) {
    myConsoleLog(name, varToString({ formEdit: formEdit }), "onsubmit", event.target.email.value, event.target.password.value);
    event.preventDefault();
  });

  formEdit.addEventListener("input", function (event) {
    if (formEditEmail.validity.valid && formEditPassword.validity.valid) {
      editBtn.disabled = false;
    } else {
      editBtn.disabled = true;
    }

  });
};
let init = () => {
  myConsoleLog(name, init.name);
  addListener();
};

init();
myConsoleLog(name, "loaded");
