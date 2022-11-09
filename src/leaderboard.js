// polyfill
require("es6-promise").polyfill(); // in header.js
import "whatwg-fetch";

// head
// require("./comp/ui/common/gpt/index.js");
require("./comp/js/webp/index.js");
require("./comp/ui/common/header/index.js")

// body
import { myConsoleLog, fetchProducts, originPath, device, myAlert } from "./globals.js";
import "./comp/js/user/index.js";

require("./comp/ui/common/pop-up-header/index.js");
require("./comp/ui/common/log-in/index.js");
require("./comp/ui/common/infor-button/index.js");

require("./comp/ui/leaderboard/infor/index.js");
require("./comp/ui/leaderboard/top-3/index.js");
require("./comp/ui/leaderboard/my-rank/index.js");
require("./comp/ui/leaderboard/my-scores/index.js");
require("./comp/ui/leaderboard/pop-up-my-scores/index.js");
require("./comp/ui/leaderboard/list-scores/index.js");

require("./comp/ui/common/footer/index.js");
require("./comp/ui/common/back-to-top/index.js");



const name = "leaderboard";

if (device.isMobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      import("./comp/ui/common/back-to-top/index")
        .then(({ default: btt }) => { })
        .catch((error) => {
          return "An error occurred while loading the component";
        });
    }
  });
}

myConsoleLog(name, "originPath", originPath());
myConsoleLog(name, "loaded");
