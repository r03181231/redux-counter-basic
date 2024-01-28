import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider로 App컴포넌트를 감싸줘.
  // 그럼 App이라는 컴포넌트가 프로바이더의 지배권 안으로 들어오는 거야.
  // Provider는 store를 기반으로 지배권을 행사해.
  // store로 만든 중앙 데이터 관리소를 이 App컴포넌트 하부에서 이 App컴포넌트가
  // 있는 곳 전체에서 store를 쓸 수 있다는 거야.

  // 그래서 옵션으로 store
  // export한 store를 임포트해와서 넣어줘야 해.
  // 주의 : 이상한 경로에서 가져오지말고 configStore에서 가져와서 써야해.
  // export default로 내보낸 건 import할 때 {}를 빼고 적어줘야해.
  // export 는 {}를 넣어주고.
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
