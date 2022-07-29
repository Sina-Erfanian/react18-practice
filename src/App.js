// import "./App.css";

// import Counter from "./Components/Counter";
// import Counter2 from "./Components/Counter2";
// import State from "./Components/State";
// import State2 from "./Components/State2";
// import ChangeName from "./Components/ChangeName";
// import { useState } from "react";
// import { func } from "prop-types";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [font, setFont] = useState(32);
//   function inc() {
//     setCount(count + 1);
//   }
//   function dec() {
//     if (count <= 0) {
//       setCount(0);
//     } else {
//       setCount(count - 1);
//     }
//   }
//   function reset() {
//     setCount(0);
//   }

//   function incFont() {
//     setFont(font + 1);
//   }
//   return (
//     <>
//       <Counter2
//         inc={inc}
//         dec={dec}
//         reset={reset}
//         count={count}
//         font={font}
//         incFont={incFont}
//       />
//     </>
//   );
// };

// export default App;

import React from "react";

import { Link, Outlet } from "react-router-dom";

import Clock from "./Components/Clock";

import throttle from "lodash.throttle";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [state, setState] = useState(0);

  const Logger = (info) => {
    console.log(`Your State is ${info}`);
  };

  const throtteledClick = useCallback(throttle(Logger, 2000), []);

  const clickHandler = () => {
    setState(state + 1);
    throtteledClick(state + 1);
  };

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>My Library</h1>
      <Link to="/books">Books</Link>
      <Link to="/about">About Us</Link>
      <hr style={{ marginTop: 20 }} />
      <Outlet />
      <hr />
      <Clock /> */}
      <p>{state}</p>
      <button onClick={clickHandler}>+</button>
    </>
  );
}

export default App;
