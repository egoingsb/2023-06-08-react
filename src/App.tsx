import React, { useState } from "react";
import countStyle from "./App.module.css";
import "./App.css";
console.log("🚀 ~ file: App.tsx:3 ~ countStyle:", countStyle);
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
    <div className={countStyle.layout}>
      <h1
        style={{
          color: "red",
          backgroundColor: "yellow",
        }}
      >
        {props.title}
      </h1>
      <button className="btn" onClick={up}>
        +
      </button>{" "}
      👉 {count}
    </div>
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
