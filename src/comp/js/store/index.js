
const name = "store";
import { myConsoleLog } from "../../../globals";

const store = {};
export const store_ACTION_TYPE = {  
  USER_playGame_saveDatabase: "USER_playGame_saveDatabase",
  USER_playGame_gameScore: "USER_playGame_gameScore",
  USER_inventoryFetched: "USER_inventoryFetched",
  USER_rankLeaderboardFetched: "USER_rankLeaderboardFetched",
  USER_eventsLeaderboardFetched: "USER_eventsLeaderboardFetched",
  USER_logWillNotChange: "USER_logWillNotChange",
  INDEX_productFetched: "INDEX_productFetched",

}
export let store_subcribe = (msg, handler) => {
  myConsoleLog(name, store_subcribe.name, msg);
  if (!store[msg]) {
    store[msg] = [handler]
  } else {
    store[msg].push(handler)
  }

  // relay
  if (store[msg+"-relay"]) {
    const temp = store[msg+"-relay"]
    const { timeMs, params } = temp
    if (Date.now() > timeMs) {
      handler(params)
    }
  }
}
export let store_dispatch = (msg, params = {}) => {
  myConsoleLog(name, store_dispatch.name, msg, params);
  if (!!store[msg]) {
    store[msg].forEach(element => {
      element(params)
    });
  }

  // relay
  const { relay } = params
  if (relay) {
    const temp = store[msg+"-relay"] = {}
    temp.timeMs = Date.now()
    temp.params = {...params}
  }
}
