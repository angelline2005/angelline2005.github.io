export * from "./comp/js/localhost/index"
export * from "./comp/js/device/index"
import { store_ACTION_TYPE, store_dispatch } from "./comp/js/store/index"
export * from "./comp/js/store/index"
import { urlParams } from "./comp/js/url-params/index"
export * from "./comp/js/url-params/index"
export * from "./comp/js/products";
export * from './comp/js/i18n/index'

const name = "globals";

window.enableADS = false // not use ima3 ads

let { localStorage } = window;
/* functions */
export let loadLS = (from, to) => {
  // save to a variable
  const loadedObj = JSON.parse(localStorage.getItem(from) || JSON.stringify(""));
  const tempObj = { ...to, ...loadedObj };
  Object.assign(to, tempObj);
};
export let saveLS = (overrideObj, from, to) => {
  // save to a variable, then save to LocalStorage
  const tempObj = { ...from, ...overrideObj };
  Object.assign(from, tempObj);
  localStorage.setItem(to, JSON.stringify(from));
};
export let myConsoleLog = (...args) => {
  const isDebug = urlParams.get("debug") === 'true';
  if (isDebug) {
    console.log(...args);
  }
};
export let myAlert = (...args) => {
  const isAlert = urlParams.get("alert") === 'true';
  if (isAlert) {
    alert(args.join(" "));
  }
  myConsoleLog(...args);
};
export let myAlertAsync = (...args) => {
  const isDebug = urlParams.get("debug") === 'true';
  if (isDebug) {
    myAlert(...args);
    return new Promise((resolve) => setTimeout(resolve, 500));
  }
};
export let loadOrderScript = (url1, url2, url3) => {
  var script1 = document.createElement("script");
  script1.setAttribute("src", url1);
  script1.onload = function () {
    if (typeof url2 != "undefined") {
      var script2 = document.createElement("script");
      script2.setAttribute("src", url2);
      script2.onload = function () {
        if (typeof url3 != "undefined") {
          var script3 = document.createElement("script");
          script3.setAttribute("src", url3);
          document.body.appendChild(script3);
        }
      };
      document.body.appendChild(script2);
    }
  };
  document.body.appendChild(script1);
};
export let webpReloadImage = function (_this) {
  _this.src = _this.dataset.src
    .replace(/.jppg/gi, ".jpg")
    .replace(/.pnng/gi, ".png");
  _this.removeEventListener("error", function () {});
};
export let getCookie = (name) => {
  var matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
export let elShow = (element, display = "block") => {
  element.style.display = display
}
export let elHide = (element) => {
  element.style.display = "none"
}
export let elHideChildren = (parent) => {  
  for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children.item(i)
    element.style.display = "none"
  }
}
export let elShowing = (element) => {
  return element.style.display !== "none"
}
export let isAndroid = () => {
  return navigator.userAgent.toLowerCase().includes("android");
}
export let isAndroidWebview = () => {    
  let result = false
  const user_agent = navigator.userAgent.toLowerCase()
  if (isAndroid())
  {
    result = user_agent.includes("version/4.0") || user_agent.includes("wv)")
  }
  myConsoleLog("isAndroidWebview: " + result)
  return result;
}
export let getChromeVersion = () => {
  var result = -1;
  const user_agent = navigator.userAgent
  var re = /Chrome\/(..)/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseInt(found[1]);

  // get from url
  if (urlParams.has("cv")) {
    result = urlParams.get("cv")
  }
  myConsoleLog("getChromeVersion: " + result)
  return result;
}
export let getAndroidVersion = () => {
  var result = -1;
  let user_agent = navigator.userAgent
  var re = /Android (.*);/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseFloat(found[1]);

  // get from url
  if (urlParams.has("av")) {
    result = urlParams.get("av")
  }
  myConsoleLog("getAndroidVersion: " + result)
  return result;
}
export let getSamsungBrowserVersion = function () {
  myConsoleLog("getSamsungBrowserVersion: " + navigator.userAgent);
  var result = -1;
  var user_agent = navigator.userAgent;
  var re = /SamsungBrowser\/(...)/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseInt(found[1]);
  // get from url
  if (urlParams.has("sbv")) {
    result = urlParams.get("sbv")
  }
  myConsoleLog("getSamsungBrowserVersion: " + result);
  return result;
};
export let redirect_to = async (url, params = { target: "" }) => {
  await myAlertAsync("redirect_to ", url)
  if(params.target.toLowerCase() === "_blank") {
    window.open(url, params.target);
  } else {
    window.location.href = url
  }
}
export let varToString = varObj => Object.keys(varObj)[0]

let ar_response_code_def = 1
let response_code_def_lb = 1001;
export const AR_RESPONSE_CODE = Object.freeze({
  SUCCESSFUL: ar_response_code_def++,
  EMAIL_REQUIRED: ar_response_code_def++,
  EMAIL_INVALID_FORMAT: ar_response_code_def++,
  DATA_BASE_ERROR: ar_response_code_def++,
  USER_EXITS: ar_response_code_def++,               //5
  USER_NOT_FOUND: ar_response_code_def++,
  PASS_INCORRECT: ar_response_code_def++,
  TOKEN_REQUIRED: ar_response_code_def++,
  TOKEN_INVALID: ar_response_code_def++,
  TOKEN_FAKE: ar_response_code_def++,               //10
  USER_ID_REQUIRED: ar_response_code_def++,
  THIRD_PARTY_REGISTRATION: ar_response_code_def++,
  LOGIN_REQUIRED: ar_response_code_def++,
  GAME_ID_REQUIRED: ar_response_code_def++,
  PARAM_TYPE_INCORRECT: ar_response_code_def++,     //15
  USER_NOT_RECOGNIZED: ar_response_code_def++,
  MISSING_PARAM: ar_response_code_def++,
  ITEM_NOT_AVAILABLE: ar_response_code_def++,
  ITEM_ALREADY_PURCHASED: ar_response_code_def++,
  NOT_ENOUGH_COIN: ar_response_code_def++,          //20
  PASS_REQUIRED: ar_response_code_def++,
  PASS_INVALID_FORMAT: ar_response_code_def++,
  YEAR_OF_BIRTH_REQUIRED: ar_response_code_def++,
  AGE_RESTRICTION: ar_response_code_def++,
  BAD_WORD: ar_response_code_def++,                 //25
  ITEM_ALREADY_CLAIMED: ar_response_code_def++,                 
  ITEM_INPROGRESS: ar_response_code_def++,

  // LB_RESPONSE_CODE
  TOUR_NOT_EXITS: response_code_def_lb++, // ...1
  TOUR_NOT_ACTIVE: response_code_def_lb++,
  TOUR_ENDED: response_code_def_lb++,
  KEY_NOT_MATCH: response_code_def_lb++,
  EVENT_NOT_START: response_code_def_lb++, // ...5
  EVENT_ENDED_NO_NEW_EVENT: response_code_def_lb++,
  EVENT_ENDED_HAVE_NEW_EVENT: response_code_def_lb++,
  NOT_HIGH_SCORE: response_code_def_lb++,
  IMAGE_SIZE_OVER_LIMIT: response_code_def_lb++,  // ...10
  SCORE_NOT_VALID: response_code_def_lb++,
});

export let originPath = () => {
  let result = ""
  if (!window.cdn_path) {
    result = window.location.origin + window.location.pathname.replace(/\/[\w\-]*\.\w*/gi, "\/") // remove xxx.html
  } else {
    result = window.cdn_path;
  }
  return result
}
export let stopPropagation = (event) => {
  myConsoleLog(name, stopPropagation.name);
  // event.preventDefault(); // prevent a href.
  event.stopPropagation();
}

export let remToPx = (value) => {
  let result = 0;
  let vw = window.innerWidth/100
  let live_rem = 26.6667*vw // get from header css
  result = parseFloat(value)*live_rem
  return result
}

export let checkObjectEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
}

export let handleFetchError = function (err) {
  console.warn(err);
  return new Response(JSON.stringify({
      code: 400,
      message: err.message, 
      error: 400,
  }));
};
export let fetchAwait = async (url= "abc.com/api.php?debug=true", onsuccess = null, options = { method: "POST", headers: {}, body: ""}) => {  
  const res = await (fetch(url, options).catch(handleFetchError))
  if (res.ok) {
    const resJ = await res.json();
    if (onsuccess != null) {    
      onsuccess(resJ);
    }
    return resJ
  } else {
    handleFetchError("!res.ok")
  }
  /* const res = await fetch(url, options);
  if (!res.ok) {
    myConsoleLog(name, fetchAwait.name, "!res.ok", res)
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  } 
  const resJ = await res.json();
  if (onsuccess != null) {    
    onsuccess(resJ);
  }
  return resJ; */
}


let messageHandler = (event) => {
  const { action } = event.data
  if (action == 'ga-action-Start'){    
    myConsoleLog(name, messageHandler.name, event);
    store_dispatch(store_ACTION_TYPE.USER_playGame_saveDatabase)
  }
  if (action == 'action-GameScore'){   
    const { base64image, score, time } = event.data
    myConsoleLog(name, messageHandler.name, event);
    store_dispatch(store_ACTION_TYPE.USER_playGame_gameScore, { action, base64image, score, time })
  }
}
/* functions end */

window.addEventListener("message", messageHandler, false);

// debug
if (urlParams.has("iw")) myAlert("innerWidth: " + window.innerWidth)
if (urlParams.has("ih")) myAlert("innerHeight: " + window.innerHeight)

myConsoleLog(name, "loaded");
