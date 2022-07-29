import { useState } from "react";
import { useLayoutEffect, useEffect } from "react";

function UseLayoutEffectExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  useEffect(() => {
    console.log("second useEffect");
  }, [count]);
  useEffect(() => {
    console.log("third useEffect");
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default UseLayoutEffectExample;
