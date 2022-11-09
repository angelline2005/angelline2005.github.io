import "./style.css";


import {
  myConsoleLog,
  myAlert,
  elHide,
  elShow,
} from "../../../../globals.js";

let ath_container = document.querySelector(".ath-container");
let ath_was_shown = true; // temp disable
let deferredPrompt = null;
window.ath_showThePrompt = () => {
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      myConsoleLog("User accepted the A2HS prompt");      
    } else {
      myConsoleLog("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });

  elHide(ath_container)
};
window.addEventListener("beforeinstallprompt", (e) => {
  myAlert("beforeinstallprompt");

  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  // Update UI to notify the user they can add to home screen
  // display ath sticky bar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      if (!ath_was_shown) {
        ath_was_shown = true;
        elShow(ath_container, "flex")
      }
    }
  });
});
window.addEventListener("appinstalled", (evt) => {
  // Log install to analytics
  myConsoleLog("INSTALL: Success");
});

myConsoleLog("ath loaded");
