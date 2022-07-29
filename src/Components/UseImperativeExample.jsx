import React from "react";
import { useRef } from "react";
import { useState, useImperativeHandle } from "react";

let CustomInput = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      alertHi: () => alert("hi"),
    };
  });
  return <input {...props} ref={ref} />;
};

CustomInput = React.forwardRef(CustomInput);

function UseImperativeExample() {
  const [value, setValue] = useState("ya bro");
  const inputRef = useRef(null);
  return (
    <>
      <CustomInput
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Type Something ..."
      />
      <button onClick={() => inputRef.current.alertHi()}>Click Me</button>
    </>
  );
}

export default UseImperativeExample;
