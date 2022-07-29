import React from "react";
import { useEffect } from "react";

function SecondClock({ date, color }) {
  useEffect(() => {
    console.log("Component Created");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [color]);
  let styles = {
    color: color ? "tomato" : "black",
  };
  return (
    <>
      <p style={styles}>{date.toLocaleTimeString()}</p>
    </>
  );
}

export default SecondClock;
