import {
  AR_RESPONSE_CODE,
  fetchAwait,
  localhost,
  myAlert,
  myConsoleLog,
  redirect_to,
  urlParams,
  originPath,  
  fetchRankLeaderBoard,
  fetchEventsLeaderboard,
  store_ACTION_TYPE,
  store_dispatch,
  store_subcribe,
  saveLS,
  loadLS,
  getCookie,
  getGameNameFromPId,
  QUEST_TYPE,  
} from "../../../globals.js";
const { environment: env } = require (`../../../environments/environment.${process.env.NODE_ENV}.js`);

const name = "user";
const LS_USER = originPath() + "LS_USER";
let default_gameLeaderboard = {
  lb_id: null,
  score: 0,
  score_date: null,
  key: null,
  start_time: null,
  end_time: null,
  rank: null,
  list: null,
  screen_shoot: null,
  gameNeedReset: false,
}
let default_ls_user = {
  version: 221102,
  uiduser_encrypt: "ludilbtest", // no need in storage
  game_id: 4049, // no need in storage
  partner_id: 1, // no need in storage
  tour_id: 2, // no need in storage
  user_id: null,  
  base64image: null,
  gameLeaderboard: {
    ...default_gameLeaderboard
  },
  account_kit: {
    access_token: null,
    expires_in: null,
    scope: null,
    id_token: null,
    refresh_token: null,
    // extra
    expires_at: null,
    expires_at_str: null,
  },
  tp_user_info: {
    displayName: "",
    openID: "",
    email: "",
  },
  playGame: {
    action: null, 
    base64image: null,
    score: null, 
    score_date: null
  }
}
export let ls_user = {
  ...default_ls_user
};
export let defaultParams = {
  client_id: env.client_id,
  client_secret: env.client_secret,
  redirect_uri: env.redirect_uri,
  scope: env.scope
}
let isFakeFetch = false

export let LOG_STATUS = {
  NOT_INIT: -1,
  LOGGING: 0,
  LOGGED: 1,
  NOT_LOGGED: 2,
};
export let log = {
  name: "user-log",
  _status: LOG_STATUS.NOT_INIT,
  get status() {
    return this._status
  },
  set status(value) {
    if (this._status != value) {
      this._status = value
      if (value == LOG_STATUS.LOGGED || value == LOG_STATUS.NOT_LOGGED) {
        store_dispatch(store_ACTION_TYPE.USER_logWillNotChange, { relay: true, status: value })
      }
    }
  },
  get is() {
    return this._status == LOG_STATUS.LOGGED
  }
}
let completionQuest = {
}

export let user_playGame = (
  event,
  params = { pID: -1, name: "", link: "" }
) => {
  const { currentTarget } = event;
  const { pID: game_id, name: game_name, link } = params;
  myConsoleLog(name, user_playGame.name, link);
  event.preventDefault();
  redirect_to(link);
};

let user_playGame_saveDatabase = () => {
  myConsoleLog(name, user_playGame_saveDatabase.name);
}
let user_playGame_gameScore = (params) => {
  myConsoleLog(name, user_playGame_gameScore.name);  
  const { base64image, score, time } = params
  const { gameLeaderboard: { score: ls_score } } = ls_user
  if (ls_score < score) {
    const date = new Date().getTime()
    user_saveLS( {playGame: { base64image, score, score_date: date, time }})
    if (gameLeaderboard_valid()) {
      user_submitScore({}, scoreSubmittedHandler)
    } else  {
      let { tp_user_info: { openID: tp_id, displayName }, uiduser_encrypt, game_id, partner_id, tour_id } = ls_user  
      let params = {
        tp_id,
        displayName,
        uiduser_encrypt,
        game_id,
        partner_id,
        tour_id
      }
      registerUser(params, (regResJ) => {
        registerHandler(regResJ)
        user_submitScore({}, scoreSubmittedHandler)
      })
    }
  }

}
let scoreSubmittedHandler = (resJ) => {
  myConsoleLog(name, scoreSubmittedHandler.name, resJ);
  const { code } = resJ;
  if (code == AR_RESPONSE_CODE.SUCCESSFUL) {     
    const { rank, screen_shot } = resJ
    const { playGame: { score } } = ls_user
    let { gameLeaderboard } = ls_user
    gameLeaderboard = { ...gameLeaderboard, rank, score}
    user_saveLS({ gameLeaderboard })
  }
}

let user_submitScore = (params = {}, onsuccess = null) => {
  myConsoleLog(name, user_submitScore.name);
 
  
  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=submit_score&debug=true";
  if (localhost.is) {
    apiUrl = localhost.apiUrl
  }
  const { tp_user_info: { openID: tp_id }, uiduser_encrypt, game_id, partner_id, tour_id, user_id, gameLeaderboard: { lb_id, key }, playGame: { score, base64image, time }  } = ls_user
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ tp_id, uiduser_encrypt, game_id, partner_id, tour_id, user_id, lb_id, key, score, time, screenshot: base64image }),
  };

  fetchAwait(
    apiUrl + apiParams,
    (resJ) => {
      if (onsuccess) onsuccess(resJ)      
    },
    options
  );
}
export let as_register = (backUrl) => {
  myConsoleLog(name, as_register.name, backUrl);
};
export let as_connect = (backUrl) => {
  myConsoleLog(name, as_connect.name, backUrl);
};
export let as_disconnect = (backUrl) => {
};
export let user_loadLS = () => {
  let tmp = {}
  loadLS(LS_USER, tmp);
  if (tmp.version == undefined || tmp.version < default_ls_user.version) { // has new version
    myConsoleLog(name, user_loadLS.name, "has new version");
    user_saveLS(default_ls_user)    
  } else {
    ls_user = {...tmp}
    myConsoleLog(name, user_loadLS.name, "no new version");
  }
};
export let user_saveLS = (overrideObj = {}) => {
  myConsoleLog(name, user_saveLS.name, overrideObj);
  saveLS(overrideObj, ls_user, LS_USER);
};
export let updateLogStatus = () => {
  myConsoleLog(name, updateLogStatus.name);
  let { tp_user_info: { openID: tp_id, displayName }, uiduser_encrypt, game_id, partner_id, tour_id } = ls_user
  
  if (urlParams.has("tp-id")) {
    tp_id = urlParams.get("tp-id");
    // user_saveLS( { tp_user_info: { openID: tp_id } })
  }
  if (urlParams.has("uiduser_encrypt")) {
    uiduser_encrypt = urlParams.get("uiduser_encrypt");
    user_saveLS({uiduser_encrypt})
  }
  if (tp_id && uiduser_encrypt) {
    let params = {
      tp_id,
      displayName,
      uiduser_encrypt,
      game_id,
      partner_id,
      tour_id
    }
    log.status = LOG_STATUS.LOGGING
    registerUser(params, registerHandler)
  } else {
    log.status = LOG_STATUS.NOT_LOGGED
  }
}
let registerHandler = (resJ) => {
  myConsoleLog(name, registerHandler.name, resJ);
  const { code }  = resJ
  if (code == AR_RESPONSE_CODE.SUCCESSFUL) {
    const { user_id, lb_id: res_lb_id, score, key, avatar }  = resJ
    let { gameLeaderboard } = ls_user
    const { lb_id } = gameLeaderboard
    let gameNeedReset = +lb_id != +res_lb_id
    gameLeaderboard = { ...gameLeaderboard, lb_id: res_lb_id, score, key, avatar, gameNeedReset}
    user_saveLS({ gameLeaderboard, user_id })
    log.status = LOG_STATUS.LOGGED    
    fetchRankLeaderBoard({ lb_id: res_lb_id }, rankLeaderboardHandler)
  }
}
export let registerUser = (params = { tp_id, displayName, uiduser_encrypt, game_id, partner_id, tour_id }, onsuccess = null) => {
  myConsoleLog(name, registerUser.name);

  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=register_user&debug=true";
  if (localhost.is) {
    apiUrl = localhost.apiUrl
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params)
  }
  fetchAwait(apiUrl + apiParams, (resJ) => {
    if (onsuccess) onsuccess(resJ)
  }, options)
};
let rankLeaderboardHandler = ( resJ ) => {
  myConsoleLog(name, rankLeaderboardHandler.name);
  let { gameLeaderboard } = ls_user
  let { start_time, end_time } = resJ
  start_time = +start_time
  end_time = +end_time
  let start_time_str = ""
  let end_time_str = ""
  if (!Number.isNaN(start_time)) {
    start_time_str = new Date(start_time).toISOString()
  }
  if (!Number.isNaN(end_time)) {    
    end_time_str = new Date(end_time).toISOString()
  }
  gameLeaderboard = {...gameLeaderboard, ...resJ, start_time_str, end_time_str}
  user_saveLS({ gameLeaderboard })
  store_dispatch(store_ACTION_TYPE.USER_rankLeaderboardFetched, {relay : true , ...resJ})
}
export let fetchUserTpInfo = (params = { access_token }, onsuccess = null) => {
  myConsoleLog(name, fetchUserTpInfo.name);

  let apiUrl = "https://account.cloud.huawei.com/rest.php?nsp_svc=GOpen.User.getInfo";
  let apiParams = "";
  
  const options = {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params)
  }  
  
  if (isFakeFetch) {
    setTimeout(() => {
      let resJ = {
        "displayName":"182******74",
        "openID":"MDFAMTAxMDA1MTg1QGFlMzM0OWIyOGY0MzNiaNjI1MDRiaNTI5ODAxYTA3MDhkQDU1MDA4ZTZmNTA2ZTE4ZTg0Yzc2YTlmNGVmN2E1ZjY1OTg4NWRiaN2QxMzQyMDUzNGMzNTU0YWQ3",
        "headPictureURL":"https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0150086000130905592.20180407082531.08157939582468778294625163020035.1000.9C3EE92B95EFEF4CAC263604A15953F32C7BC9E8A47D52B774511F75EF34C0D4.jpg"
      }
      if (onsuccess) onsuccess(resJ)
    }, 1000);    
  } else {
    fetchAwait(apiUrl + apiParams, (resJ) => {      
      if (onsuccess) onsuccess(resJ)
    }, options)
  }
};
let userTpInfoHandler = (resJ) => {
  myConsoleLog(name, userTpInfoHandler.name, resJ);

  const { error } = resJ
  if (error) {
    if (urlParams.has("code")) {
      let code = urlParams.get("code");
      fetchAccessToken({ code }, accessTokenHandler)
    } else { // not log
      log.status = LOG_STATUS.NOT_LOGGED
    }
  } else {    
    user_saveLS({ tp_user_info: resJ })
    updateLogStatus()
  }
}
let refreshTokenHandler = (resJ) => {
  myConsoleLog(name, refreshTokenHandler.name, resJ);
  const { error } = resJ
  if (error) {
    if (urlParams.has("code")) {
      let code = urlParams.get("code");
      fetchAccessToken({ code }, accessTokenHandler)
    } else { // not log
      log.status = LOG_STATUS.NOT_LOGGED
    }
  } else {
    accessTokenHandler(resJ)
  }
}
let accessTokenHandler = (resJ) => {
  myConsoleLog(name, accessTokenHandler.name, resJ);

  const { error } = resJ
  if (error) { 
    log.status = LOG_STATUS.NOT_LOGGED
  } else { 
    const { access_token, expires_in } = resJ
    let temp = { ...resJ }
    temp.expires_at = new Date().getTime() + expires_in * 1000
    temp.expires_at_str = new Date(temp.expires_at).toISOString()
    user_saveLS({ account_kit: temp })
    // TODO: check if need to refetch UserInfo
    fetchUserTpInfo( { access_token }, userTpInfoHandler)
  }
}
let updateAccessToken = () => {
  myConsoleLog(name, updateAccessToken.name);
  let { account_kit: { access_token, refresh_token, expires_at} } = ls_user
  let now = new Date().getTime()
  if (access_token && refresh_token) {
    if (now >= expires_at) {
      fetchAccessToken({ refresh_token }, refreshTokenHandler) 
    }
    else {
      fetchUserTpInfo( { access_token }, userTpInfoHandler)
    }
  } else if (urlParams.has("code")) {
    let code = urlParams.get("code");
    urlParams.delete("code")
    fetchAccessToken({ code }, accessTokenHandler)
  } else { // not log
    log.status = LOG_STATUS.NOT_LOGGED
  }
}
export let fetchAccessToken = (params = { grant_type, code, refresh_token }, onsuccess = null) => {
  myConsoleLog(name, fetchAccessToken.name, params);  
  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=token&debug=true";
  if (localhost.is) {
    apiUrl = localhost.apiUrl
  }
  const { client_id, client_secret, redirect_uri } = defaultParams
  let { code, refresh_token } = params
  if (code) {
    params.grant_type = "authorization_code"
  } else if (refresh_token) {
    params.grant_type = "refresh_token"
  }
  params = { client_id, client_secret, redirect_uri, ...params}
  const options = {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params)
  }  
  
  if (isFakeFetch) {
    setTimeout(() => {
      let resJ = {
        "access_token": "CFyJ21sNODl16eV9y2vu3CwQk9DBr32BkOcxxgAd7MZUR5th1giyTk5\/kA+QDAyxou+\/5U2zzBRcf3qgLkkFdtbbC+mM3zFV7xj7CCEMHc5Tw92al0Y=",
        "refresh_token": "CF13G0sRaGybtYt7SIyeUILNORtTFwMgz4ao5C7j7vtgLPt6ogmXKjdI8RS\/YlyS71z4DyP6kEMnOrRlmNK0KhdOUNWd+qVLLRsEEHkqRIKpuAkPvL8=",
        "expires_in": 3600,
        "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3ODI0NTY2Njc4OTgtc2M0MzE3Y2l0NGEwMjB0NzdrbGdsbWo1ZjA4YWtnMWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3ODI0NTY2Njc4OTgtN2NkNGJpYWRkaGVwNGc4cnZic2VlOGtwcDA5Zm1hNzIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3MTIxMzkwMzgwNDE2MDc0MTQiLCJlbWFpbCI6Inh1ZXpoZW5odWF0anVAc2luYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMm9lTTllT09zNTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQkkvMVpOSC0xdmxxc3cvczk2LWMvcGhvdG8uanBnIiwiaWF0IjoxNTYxNDUxMTUyLCJleHAiOjE1NjE0NTQ3NTJ9.Eo9IHMkid596jvt1YYzNsRtDq9c9K9dbougkU41Noh7TXNiko86_RuWwHID6k1kDg398AwC3wwH-t2hLcUjgrXPNd9XYU96Jp4-UxdDszP6ywEJgvvBCyTHzsi2auvKt_MnfSrs3qOKfh7noJvXq8AY-Hi3vqSUks5kGqbZKVzCHhBDO3RD9Fs9YHsB6w0XVKZojPOBDaAT_TiijoChn-Q-e8NbSGUx52OgeH-Nw5lOj6JVb_7fb6ucWRzlhiQuzFjklevLVw2pjw1MxKbl1vfRp0X699uZBVjgl9hj1L7LSDObuPzLiXF7ojji5JKYC6zIwAtZQUZ_VUmSk01GDLQ",
        "scope": "openid profile email",
        "token_type": "Bearer"
      }
      if (onsuccess) onsuccess(resJ)
    }, 1000);    
  } else {
    fetchAwait(apiUrl + apiParams, (resJ) => {      
      if (onsuccess) onsuccess(resJ)
    }, options)
  }
};
let cancelAccessTokenHandler = (resJ) => {
  myConsoleLog(name, cancelAccessTokenHandler.name, resJ);
  const { error } = resJ
  if (error) {

    // assume the request is ok
    // reset ls_user
    // user_saveLS(default_ls_user)
    // redirect_to(originPath() + "index.html");
  } else {
    // reset ls_user
    user_saveLS(default_ls_user)
    redirect_to(
      originPath() + "index.html"
    );
  }
}
export let logOut = () => {
  myConsoleLog(name, logOut.name);
  const { account_kit: { access_token } } = ls_user
  fetchCancelAccessToken({ token: access_token }, cancelAccessTokenHandler)
}
export let fetchCancelAccessToken = (params = { token }, onsuccess = null) => {
  myConsoleLog(name, fetchCancelAccessToken.name, params);

  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=revoke&debug=true";
  if (localhost.is) {
    apiUrl = localhost.apiUrl
  }
  const { account_kit: { access_token } } = ls_user
  const { token } = params

  if (!token) {
    token = access_token
  }
  const options = {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params)
  }  
  
  if (isFakeFetch) {
    setTimeout(() => {
      let resJ = {
      }
      if (onsuccess) onsuccess(resJ)
    }, 1000);    
  } else {
    fetchAwait(apiUrl + apiParams, (resJ) => {      
      if (onsuccess) onsuccess(resJ)
    }, options)
  }
};
let eventsLeaderboardHandler = ( resJ ) => {
  myConsoleLog(name, eventsLeaderboardHandler.name, resJ);
  const { code } = resJ;
  if(code == AR_RESPONSE_CODE.SUCCESSFUL){
    let { gameLeaderboard } = ls_user
    let { start_time, end_time } = resJ
    start_time = +start_time
    end_time = +end_time
    let start_time_str = ""
    let end_time_str = ""
    if (!Number.isNaN(start_time)) {
      start_time_str = new Date(start_time).toISOString()
    }
    if (!Number.isNaN(end_time)) {    
      end_time_str = new Date(end_time).toISOString()
    }
    gameLeaderboard = {...gameLeaderboard, ...resJ, start_time_str, end_time_str}
    
    user_saveLS({ gameLeaderboard })
    store_dispatch(store_ACTION_TYPE.USER_eventsLeaderboardFetched, { relay: true, ...resJ})
  }
}
let init = () => {
  myConsoleLog(name, init.name);
  if (urlParams.has("fake-fetch")) {
    isFakeFetch = true
  }
  user_loadLS();
  
  const { tour_id } = ls_user
  fetchEventsLeaderboard({ tour_id }, eventsLeaderboardHandler)
  updateAccessToken()
  
  store_subcribe(store_ACTION_TYPE.USER_playGame_saveDatabase, user_playGame_saveDatabase);
  store_subcribe(store_ACTION_TYPE.USER_playGame_gameScore, user_playGame_gameScore)
};
export let gameLeaderboard_valid = () => {
  let result = true
  let { gameLeaderboard: { lb_id, end_time } } = ls_user
  let now = new Date().getTime()
  if (now >= +end_time) {
    result = false
  }
  if (!lb_id) {
    result = false
  } 
  myConsoleLog(name, gameLeaderboard_valid.name, result);
  return result
}

init();
myConsoleLog(name, "loaded");
