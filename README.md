
# swap-chat-js是一款款专注于在你的项目中添加web3通讯能力的插件

## 序言

> swap-chat-js是一款针对web3通讯能力的全方位解决方案。

## 项目信息

1. 原创作者：tfhan
2. 开源协议：MIT
3. 发布日期：2022-07-14
4. 联系方式：1157123521@qq.com
5. 开源地址：https://github.com/Generative-Labs/swap-chat-js.git
//
## 主要功能
//

## 基础使用方法

```
$ npm install swap-chat-js
```

```
$ yarn add swap-chat-js 
```

```javascript
import SwapChatSdk from 'swap-chat-js';

// 需要创建SwapChatSdk的实例 传入两个真实dom 元素为参数，第一个参数为调起元素的触发器，第二个元素为聊天工具的插槽容器
const SwapChatSdkStance = new SwapChatSdk(
      dom1,
      dom2
    );
//  需要调用实例的方法 instance.exect()
SwapChatSdkStance.exect()
//创建shi li
//react项目示例index.jsx
import SwapChatSdk from 'swap-chat-js';
import react, { useEffect, useRef } from "react";
import "./App.css";
function App() {
  const buttonRef = useRef();
  const containRef = useRef();
  useEffect(() => {
    const SwapChatSdkStance = new SwapChatSdk(
      buttonRef.current,
      containRef.current,
      {
        width:400,
        height:600,
      }
    );
    SwapChatSdkStance.exect();
  }, []);
  return (
    <div className="App">
      <button ref={buttonRef}>swapChat</button>
      <div ref={containRef}></div>
    </div>
  );
}

export default App;

