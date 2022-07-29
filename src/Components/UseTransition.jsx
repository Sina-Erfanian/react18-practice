import React from "react";
import { useState, useTransition } from "react";

const UseTransition = () => {
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);
  const [isPending, setTransition] = useTransition();

  const changeHandler = (e) => {
    // first setValue (because we want render it first completely)
    setValue(e.target.value);
    // then we want start to render code below
    // we put a block of code that is expensive(means he take a couple of time) inside setTransition
    setTransition(() => {
      let listArr = [];
      let count = 0;

      while (count < 10000) {
        listArr.push(e.target.value);
        count++;
      }

      setList(listArr);
    });
  };
  return (
    <div>
      <h1>Use Transition</h1>
      <input type="number" value={value} onChange={changeHandler} />
      {isPending ? (
        <h1>Please Wait ...</h1>
      ) : (
        list.map((e, i) => <div key={i}>{e}</div>)
      )}
    </div>
  );
};

export default UseTransition;
