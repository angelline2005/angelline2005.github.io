// polyfill
require("es6-promise").polyfill(); // in header.js
import "whatwg-fetch";

// head
// require("./comp/ui/common/gpt/index.js");
require("./comp/js/webp/index.js");
require ("./comp/ui/common/header/index.js")

// body
import { myConsoleLog, originPath, device, store_subcribe, store_ACTION_TYPE } from "./globals.js";
import { log } from "./comp/js/user/index.js";

require("./comp/ui/common/pop-up-header/index.js");
import { cli_show } from "./comp/ui/common/log-in/index.js";
require("./comp/ui/common/infor-button/index.js");
require("./comp/ui/profile/my-infor/index.js");
require("./comp/ui/profile/pop-up-my-infor/index.js");
require("./comp/ui/profile/event/index.js");
require("./comp/ui/leaderboard/my-rank/index.js");
require("./comp/ui/leaderboard/my-scores/index.js");
require("./comp/ui/leaderboard/pop-up-my-scores/index.js");
require("./comp/ui/common/footer/index.js");
require("./comp/ui/common/back-to-top/index.js");



const name = "profile";

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
store_subcribe(store_ACTION_TYPE.USER_logWillNotChange, () => {
  if(log.is == false) {
    cli_show()
  }
})

myConsoleLog(name, "originPath", originPath());
myConsoleLog(name, "loaded");
