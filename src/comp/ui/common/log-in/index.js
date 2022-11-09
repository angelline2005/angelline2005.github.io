import "./style.scss"

import { elHide, elShow, myConsoleLog, originPath, redirect_to, urlParams, varToString } from "../../../../globals.js";
import { defaultParams } from "../../../js/user"
import logoImg from "./../header/img/logo.png";

const name = "cli-log-in";

const logIn = document.querySelector(".cli.log-in");
const formLogIn = logIn.querySelector(".form-log-in");
const logo = logIn.querySelector(".logo img");
const loginBtn = logIn.querySelector(".login-btn button");

const formLogInEmail = logIn.querySelector("#email");
const formLogInPassword = logIn.querySelector("#password");



export const cli_show = () => {
  // elShow(logIn);

  const { client_id, redirect_uri, scope } = defaultParams
  let redirectUrl='https://oauth-login.cloud.huawei.com/oauth2/v3/authorize?'+
'response_type=code&access_type=offline&state=state_abc&client_id='+ client_id +'&redirect_uri='+ redirect_uri +'&scope='+ scope;

  redirect_to(redirectUrl);
}

let addListener = () => {
  myConsoleLog(name, addListener.name);
  logo.src = logoImg;
  loginBtn.disabled = true;

  formLogIn.addEventListener("submit", function (event) {
    myConsoleLog(name, varToString({ formLogIn: formLogIn }), "onsubmit", event.target.email.value, event.target.password.value);
    event.preventDefault();
  });

  formLogIn.addEventListener("input", function (event) {
    if (formLogInEmail.validity.valid && formLogInPassword.validity.valid) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }

  });

  if (typeof logo !== undefined || !!logo) {
    logo.onclick = (event) => {
      myConsoleLog(name, varToString({ logo: logo }), "onclick");
      elHide(logIn);
    }
  }




}


let init = () => {
  myConsoleLog(name, init.name);
  // addListener();
}

init();
myConsoleLog(name, "loaded");

