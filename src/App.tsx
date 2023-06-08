import React, { useState } from "react";
import "./App.css";
type CounterProps = {
  title: string;
  initValue: number;
};
function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.initValue);
  function up() {
    // setCount(count+1);
    setCount((oldCount) => oldCount + 1);
  }
  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={up}>+</button> 👉 {count}
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="참가자 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
