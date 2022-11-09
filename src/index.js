// polyfill
require("es6-promise").polyfill(); // in header.js
import "whatwg-fetch";

// head
// require("./comp/ui/common/gpt/index.js");
require("./comp/js/webp/index.js");
require ("./comp/ui/common/header/index.js")


// body
import { myConsoleLog, fetchProducts, originPath, device, store_ACTION_TYPE, store_dispatch } from "./globals.js";
import "./comp/js/user/index.js"

require("./comp/ui/common/sample-module/index.js");
require("./comp/ui/index/redirect-to-portal/index.js");
require("./comp/ui/common/pop-up-header/index.js");
require("./comp/ui/common/log-in/index.js");
require("./comp/ui/common/infor-button/index.js");
require("./comp/ui/common/time-left/index.js");
require("./comp/ui/index/main-banner/index.js");
require("./comp/ui/leaderboard/top-3/index.js");
require("./comp/ui/leaderboard/my-rank/index.js");
require("./comp/ui/leaderboard/my-scores/index.js");
require("./comp/ui/index/more-games/index.js");
require("./comp/ui/leaderboard/pop-up-my-scores/index.js");

//footer
require("./comp/ui/common/footer/index.js");
require("./comp/ui/common/back-to-top/index.js");

const name = "index";

if (false && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

if (device.isMobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      import("./comp/ui/common/back-to-top/index")
        .then(({ default: btt }) => {})
        .catch((error) => {
          return "An error occurred while loading the component";
        });
    }
  });
}
fetchProducts((resJ) => {
  const { products } = resJ;  
  if(!!products && products.length > 0){
    store_dispatch(store_ACTION_TYPE.INDEX_productFetched, resJ)
  }
});

myConsoleLog(name, "originPath", originPath());
myConsoleLog(name, "loaded");
