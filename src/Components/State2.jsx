import React from "react";
import { useState } from "react";

function State2() {
  const [family, setFamily] = useState("ern");
  const [name, setName] = useState("sina");
  const [age, setAge] = useState(19);

  function changeFa() {
    setFamily("Erfanian");
  }
  return (
    <>
      <h1 onClick={changeFa}>
        {name} {family} {age}
      </h1>
    </>
  );
}

export default State2;
