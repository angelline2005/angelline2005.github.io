const gl = require("../../../globals.js");
import { webpIsSupported } from "../webp/index.js"
let lazyImageObserver = null
{
  document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      lazyImageObserver = new window.IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (
            entry.isIntersecting ||
            typeof entry.isIntersecting == "undefined"
          ) {
            var lazyImage = entry.target;
            lazyImage.src = webpIsSupported
              ? lazyImage.dataset.src
                  .replace(".jpg", ".webp")
                  .replace(".png", ".webp")
              : lazyImage.dataset.src;
            //lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
            //lazyImage.onload = function(){console.log("ok")};
            lazyImage.onerror = function () {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.removeEventListener("error", function () {});
            };
          }
        });
      });
    }
    observe(lazyImages);
  });
}
export let observe = (arr) => {
  if (lazyImageObserver != null) {
    arr.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    arr.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
    });
  }
};

gl.myConsoleLog("lazy-img loaded");
