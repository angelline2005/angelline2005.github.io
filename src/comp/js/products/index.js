
import { myConsoleLog, originPath, localhost, AR_RESPONSE_CODE, fetchAwait, store_ACTION_TYPE } from "../../../globals";

const name = "products";

window.userInfo = null;
window.products = null;


export let getGameUrlFromPId = (pId) => {
  let result = ""
  const products = window.products
  products.every(product => {
    const { pID } = product
    if (parseInt(pID) == pId) {
      result = product.link
      return false // break
    }
    return true
  });
  return result
}
export let getGameNameFromPId = (pId) => {
  let result = ""
  const products = window.products
  products.every(product => {
    const { pID } = product
    if (parseInt(pID) == pId) {
      result = product.name
      return false // break
    }
    return true
  });
  return result
}
export let fetchRankLeaderBoard = (params = { lb_id }, onload = null) => {
  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=get_leaderboard&debug=true";
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
    myConsoleLog(name, fetchRankLeaderBoard.name, resJ);
    if (onload) onload(resJ)
  }, options)
};
export let fetchEventsLeaderboard = (params = { tour_id }, onload = null) => {

  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=get_leaderboard_tour&debug=true";
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
    myConsoleLog(name, fetchEventsLeaderboard.name, resJ);
    if (onload) onload(resJ)
  }, options)
};

export let fetchProducts = (onload = null) => {
  // already fetched
  if (window.products != null) {
    myConsoleLog(name, fetchProducts.name, "already fetched");
    return
  }

  let apiUrl = originPath() + "action.php";
  let apiParams = "?action=get_game_list&debug=true"
  if (localhost.is) {
    apiUrl = localhost.apiUrl
  }
  fetchAwait(apiUrl + apiParams, (resJ) => {
    myConsoleLog(name, fetchProducts.name, resJ);
    const { products } = resJ;  
    window.products = products
    if (onload) onload(resJ)    
  })
};