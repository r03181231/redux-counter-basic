import { useDispatch, useSelector } from "react-redux";
import {
  MINUS_ONE,
  minusN,
  minusOne,
  plusN,
  plusOne,
} from "./redux/modules/counter.js";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  // 여기에서 store에 접근해서, counter의 값을 읽어오고 싶어.
  const counter = useSelector((state) => {
    return state.counter;
  });

  // 지역 변수 number가 증감하는 지 확인하기 위해
  // 의존성배열에 변하는 값 number을 넣고 변할 때마다 확인해봄
  // useEffect(() => {
  //   console.log("number=>", number);
  // }, [number]);
  // dispatch를 가져올거야.
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const { value } = e.target;
          setNumber(+value);
        }}
      />
      <button
        onClick={() => {
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
