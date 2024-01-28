// 중앙 데이터 관리소(store)를 설정하는 부분
// 두 가지 api가 필요해
//createStore : store를 만드는 api
// combineReducers : 리듀서들을 하나로 묶는 역할하는 메서드.
// 인자로는 변수가 들어가고 객체가 들어갈 거야.
import { createStore } from "redux";
import { combineReducers } from "redux";

// rootReducer : reducer들을 하나로 모아서 한 개로 만들어 놓은 기본 reducer를 말해
// store(중앙state관리소)를 생성해줘서 인자로 리듀서의 묶음(rootReducer)이 들어가야해.

// modules 안에 넣어놓은 state의 묶음들을 객체 형태에 넣어둘 거야.
// 그럼 웹 애플리케이션 내에서 관리하는 state집단들이
// rootReducer로 들어가게 돼.
// 모든 컴포넌트들은 props로 값을 내려주지 않더라도
// 바로 중앙 데이터 관리소로 데이터를 참조할 수 있어.
const rootReducer = combineReducers({});
const store = createStore(rootReducer);

//그리고 이렇게 만든 store를
// 애플리케이션에 주입해 주는 과정이 필요해.
// store를 만들었는데 이 store를 사용하고 있지 않아.
// 이 store를 사용해서 앱 내부로 넣어야 하니까
// 만든 걸 바깥으로 내보내야 해.
export default store;
