import React from "react";
import { useEffect } from "react";
import { useState, useMemo } from "react";

function twice(num) {
  console.log("Very slow function");
  let count = 0;
  while (count < 1000000000) {
    count++;
  }
  return num * 2;
}

function UseMomoExample() {
  const [color, setColor] = useState(false);

  const [value, setValue] = useState(0);

  let returendValue = useMemo(() => twice(value), [value]);

  let colorTheme = useMemo(() => {
    return {
      backgroundColor: color ? "red" : "blue",
    };
  }, [color]);

  useEffect(() => {
    console.log("Color Changed");
  }, [colorTheme]);

  return (
    <div style={colorTheme}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setColor(!color);
        }}
        style={{ display: "block", margin: "20px auto" }}
      >
        Change Color
      </button>
      <p>{returendValue}</p>
    </div>
  );
}

export default UseMomoExample;
