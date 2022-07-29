import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function UseRefExample() {
  const inputEle = useRef(null);
  const inputValue = useRef("");
  const [name, setName] = useState("");
  const reRender = useRef(0);
  useEffect(() => {
    console.log(inputEle.current);
  }, []);
  useEffect(() => {
    inputValue.current = name;
  }, [name]);
  useEffect(() => {
    reRender.current = reRender.current + 1;
  });
  return (
    <div>
      <p>re render :{reRender.current}</p>
      <p>name : {name}</p>
      <p>prev : {inputValue.current}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        ref={inputEle}
        placeholder="Type something ..."
      />
      <button
        onClick={() => {
          inputEle.current.focus();
          inputEle.current.placeholder = "bye";
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default UseRefExample;
