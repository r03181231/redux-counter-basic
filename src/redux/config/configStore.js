// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";

const rootReducer = combineReducers({
  //counter: counter 원래는 이 형태지만 단축 형태로 키밸류가 같으면 생략가능해(단축생략)
  counter,
  users: users,
});
const store = createStore(rootReducer);

export default store;
