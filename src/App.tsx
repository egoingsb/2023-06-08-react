import React, { useEffect, useState } from "react";
import countStyle from "./App.module.css";
import "./App.css";
console.log("process.env.API_URL", process.env.REACT_APP_API_URL);
type CounterProps = {
  title: string;
  initValue: number;
};
function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.initValue);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "counter")
      .then((res) => res.json())
      .then((result) => {
        setCount(result.value);
      });
  }, []);
  function up() {
    // setCount(count+1);
    const url = process.env.REACT_APP_API_URL + "counter";
    const body = JSON.stringify({ value: count + 1 });
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body,
    })
      .then((response) => response.json())
      .then((result) => {
        setCount(result.value);
      });
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
