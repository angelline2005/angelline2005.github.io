
// not import
let originPath = () => {
  let result = ""
  if (!window.cdn_path) {
    result = window.location.origin + window.location.pathname.replace(/\/[\w\-]*\.\w*/gi, "\/") // remove xxx.html
  } else {
    result = window.cdn_path;
  }
  return result
}
let loadLS = (from, to) => {
  // save to a variable
  const loadedObj = JSON.parse(localStorage.getItem(from) || JSON.stringify(""));
  const tempObj = { ...to, ...loadedObj };
  Object.assign(to, tempObj);
};
let saveLS = (overrideObj, from, to) => {
  // save to a variable, then save to LocalStorage
  const tempObj = { ...from, ...overrideObj };
  Object.assign(from, tempObj);
  localStorage.setItem(to, JSON.stringify(from));
};

export let urlQueryString = window.location.search;
export let urlParams = new URLSearchParams(urlQueryString);

const LS_URL_PARAMS = originPath() + "LS_URL_PARAMS";
let paramsList = ['debug', 'alert', 'test-game', 'adsv2']
let ls_up = {
};
let up_loadLS = () => {
  let tmp = {}
  loadLS(LS_URL_PARAMS, tmp);
  {
    ls_up = {...tmp}
    // console.log(up_loadLS.name, ls_up);
  }
};
let up_saveLS = (overrideObj = {}) => {
  // console.log(up_saveLS.name, overrideObj);
  saveLS(overrideObj, ls_up, LS_URL_PARAMS);
};

let init = () => {
  up_loadLS()

  let tmpParams = new URLSearchParams(urlQueryString);
  // update tmpParams from LS
  let ls_up_arr = Object.entries(ls_up)
  for (const [key, value] of ls_up_arr) {
    if (!urlParams.has(key)) {
      tmpParams.append(key, value)
    }
  }
  // update LS from urlParams
  paramsList.forEach(param => {
    if (urlParams.has(param)) {
      let value = urlParams.get(param)
      // bool check
      if (value === 'true' || value === 'false' || value === '') {
        value = (value === 'true')
      }
      // int check
      const parsed = Number.parseInt(value, 10);
      if (!Number.isNaN(parsed)) {
        value = parsed
      }
      
      up_saveLS({ [param]: value })
    } 
  })

  // update urlParams from tmpParams
  urlParams = tmpParams
  // log 
  // console.log(init.name, "urlParams", urlParams.toString());
}

init()