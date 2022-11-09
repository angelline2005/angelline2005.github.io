const gl = require("../../../globals.js");

// functions
let WebpIsSupported = function (callback) {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  if (!window.createImageBitmap) {
    callback(false);
    return;
  }

  // Base64 representation of a white point image
  var webpdata =
    "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";

  // Retrieve the Image in Blob Format
  fetch(webpdata)
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      // If the createImageBitmap method succeeds, return true, otherwise false
      createImageBitmap(blob).then(
        function () {
          callback(true);
        },
        function () {
          callback(false);
        }
      );
    });
};

// check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
let check_webp_feature = function (feature, callback) {
  var kTestImages = {
    "lossy": "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    "lossless": "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    "alpha":
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    "animation":
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
};
// functions end

export let webpIsSupported = false;
/* check_webp_feature("lossy", function (feature, result) {
  console.log(feature + "=" + result);
  webpIsSupported = result;
}); */

gl.myConsoleLog("webp loaded");
