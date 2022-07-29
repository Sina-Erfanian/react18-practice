import React from "react";
import { useState } from "react";
import { useFetchApi, useUpdateLogger } from "../customHooks/CustomHooks";

const CustomHooksExample = () => {
  const [show, setShow] = useState(false);
  const [data] = useFetchApi("https://jsonplaceholder.ir/users");
  useUpdateLogger(show);
  return (
    <div>
      <h1>My Custom Hook Example</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        Show/Hide The Data
      </button>
      {show ? data.map((e, i) => <p key={i}>{e.username}</p>) : null}
    </div>
  );
};

export default CustomHooksExample;
