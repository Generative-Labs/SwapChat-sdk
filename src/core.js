import { addEvent, isDOM, createElement, getElementById } from "./utils";
import { iframeUrl } from "./constants";
console.log("eee", iframeUrl);
class SwapChatSdk {
  constructor(content, container) {
    if (!isDOM()(content) || !isDOM()(container)) {
      return this;
    }
    this.status = false;
    this.contenWrapper = content;
    this.button = `<div style="
     height: 44px; 
     min-width: 44px;
     border-radius: 999px;
     padding: 0 20px;
     display: flex; 
     align-items: center;
     font-family: sans-serif;
     background: #605DEC;
     color: #ffffff;
     "
     >
     <div style="display: inline-block; width: 30px; height: 30px; margin-right: 10px;">
        <img style="width: 100%; margin-right: 10px; filter: drop-shadow(0px 4px 5px rgba(36, 36, 36, 0.45));" src="https://chat.web3messaging.online/assets/icon/newHouseChatIcon.svg" alt="">
     </div>
        Create a SwapChat        
    </div>`;
    this.container = container;
  }
  exect() {
    let that = this;
    that.contenWrapper.innerHTML = that.button;
    const firstButtonDom = that.contenWrapper.firstChild;
    addEvent(firstButtonDom, "click", function () {
      if (that.status) {
        that.closeClient();
        console.log("666888");
      } else {
        that.creatClient();
        that.status = true;
      }
    });
  }
  creatClient() {
    let messageBoxEle =
      createElement(`<div class="twitter-housechan-message-box" id="web3-housechan-message-box">
            </div>`);
    let homeIconEle = createElement(
      '<img class="home-icon" src="https://chat.web3messaging.online/assets/icon/newHomeHeaderIcon.svg" alt="">'
    );
    let goHomeIconEle = createElement(
      '<img class="go-home-icon" src="https://d97ch61yqe5j6.cloudfront.net/frontend/newRefreshIconx3.png" alt="">'
    );
    let slideToggleIconELe = createElement(
      '<img class="slide-toggle-icon" id="web3-slide-toggle-icon"  src="https://d97ch61yqe5j6.cloudfront.net/frontend/headerDown.png" alt="">'
    );
    let messageHeaderEle =
      createElement(`<div class="twitter-housechan-message-header" >
            </div>
        `);
    let messageBodyEle = createElement(
      "<div class='twitter-housechan-message-body' id ='twitter-housechan-message-body' style='overflow:hidden;transition: max-height .25s;max-height:666px'></div>"
    );
    addEvent(messageHeaderEle, "click", function () {
      const slideToggleIconElement = getElementById("web3-slide-toggle-icon");
      const oriSrc = slideToggleIconElement.src;
      if (oriSrc.indexOf("Up") !== -1) {
        slideToggleIconElement.setAttribute(
          "src",
          "https://d97ch61yqe5j6.cloudfront.net/frontend/headerDown.png"
        );
        messageBodyEle.style.maxHeight = "666px";
      } else {
        slideToggleIconElement.setAttribute(
          "src",
          "https://d97ch61yqe5j6.cloudfront.net/frontend/headerUp.png"
        );
        messageBodyEle.style.maxHeight = "0px";
      }
    });
    addEvent(goHomeIconEle, "click", function (e) {
      e.stopPropagation();
      const IframeDomWrapper = getElementById("twitter-housechan-message-body");
      if (IframeDomWrapper) {
        IframeDomWrapper.innerHTML = "";
        IframeDomWrapper.innerHTML = `<iframe class="twitter-housechan-message-header-iframe" style='width: 100%; height: 600px; border: 0;' src="https://chat.web3messaging.online"></iframe>`;
      }
    });
    console.log("element", messageBoxEle, messageBoxEle.appendChild);
    messageHeaderEle.appendChild(homeIconEle);
    messageHeaderEle.appendChild(goHomeIconEle);
    messageHeaderEle.appendChild(slideToggleIconELe);
    messageBoxEle.appendChild(messageHeaderEle);
    messageBodyEle.innerHTML = `<iframe
        class="twitter-housechan-message-header-iframe"
        style="width: 100%; height: 600px; border: 0;"
        src="https://chat.web3messaging.online"
      ></iframe>`;

    messageBoxEle.appendChild(messageBodyEle);
    console.log("messageBodyEle", messageBodyEle, messageBodyEle.appendChild);
    this.container.appendChild(messageBoxEle);
  }
  closeClient() {
    const messageBoxDom = document.getElementById("web3-housechan-message-box");
    if (messageBoxDom) {
      messageBoxDom.style.display = "none";
      this.status = false;
    }
  }
}

export default SwapChatSdk;
