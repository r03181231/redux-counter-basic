// counter.js

// 초기 상태값(state)

const initialState = {
  userId: 123,
};

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.

// 리듀서 : "state에 변화를 일으키는"함수
// (1) state를 action의 type에 따라 변경하는 함수
// state를 action 안에 있는 type에 따라서 변경하는 작업

// input : state, action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
