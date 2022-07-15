import { addEvent, isDOM } from "./utils";
import { iframeUrl } from "./constants";
class SwapChatSdk {
  constructor(content, container) {
    if (!isDOM()(content) || !isDOM()(container)) {
      return this;
    }
    this.status = false;
    this.button = content;
    try {
      container.style =
        "display:none;width:400px;position:fixed;right:25px;bottom:0px;z-index:1000,width:400px;min-height: 50px;box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;";
    } catch (e) {
      console.log("");
    }
    this.container = container;
    this.container = container;
  }
  exect() {
    let that = this;
    addEvent(that.button, "click", function () {
      if (that.status) {
        that.container.style.display = "none";
        that.status = false;
      } else {
        let ccont = that.container;
        ccont.style.display = "block";
        ccont.innerHTML = "";
        let iframe = `<iframe
            style="height:600px; width: 100%"
            src=${iframeUrl}
            frameborder="0"
          ></iframe>`;
        ccont.innerHTML = iframe;

        that.status = true;
      }
    });
  }
}
export default SwapChatSdk;
