import "./style.scss";
import { myConsoleLog, varToString, elHide, elShow } from "../../../../globals";

const name = "c-back-to-top"
let back_to_top = document.querySelector(".back-to-top");

if (!!back_to_top ) {
  back_to_top.onclick = (event) => {
    myConsoleLog(name, varToString({back_to_top}), "onclick", event);
    event.preventDefault();
    const { currentTarget } = event;

    window.scroll(0, 0);
  };
}

myConsoleLog(name, "loaded");
