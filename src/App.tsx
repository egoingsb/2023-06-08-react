import React from "react";
import "./App.css";

// @ts-ignore
function Counter(props) {
  console.log("🚀 ~ file: App.tsx:6 ~ Counter ~ props:", props);
  return (
    <>
      <h1>{props.title}</h1>
      <button>+</button> 👉 {props.initValue}
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="참가자 카운터" initValue={10}></Counter>
      <Counter title="불면증 카운터" initValue={100}></Counter>
    </div>
  );
}

export default App;
