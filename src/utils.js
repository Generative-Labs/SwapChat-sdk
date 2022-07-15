export function addEvent(ele, type, handle) {
  if (Object.prototype.hasOwnProperty.call(ele, "addEventListener")) {
    ele.addEventListener(type, handle, false);
  } else if (Object.prototype.hasOwnProperty.call(ele, "attachEvent")) {
    ele.attachEvent("on" + type, function () {
      handle.call(ele);
    });
  } else {
    ele["on" + type] = handle;
  }
}
export function isDOM() {
  return typeof HTMLElement === "object"
    ? function (obj) {
        return obj instanceof HTMLElement;
      }
    : function (obj) {
        return (
          obj &&
          typeof obj === "object" &&
          obj.nodeType === 1 &&
          typeof obj.nodeName === "string"
        );
      };
}
