import { useDebugValue, useState, useId } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 4000);

  useDebugValue(`count :) ${count}`);
  return count;
}

function App() {
  // const count = useCount();
  const id = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();
  const id7 = useId();
  const id8 = useId();

  console.log(id);
  console.log(id2);
  console.log(id3);
  console.log(id4);
  console.log(id5);
  console.log(id6);
  console.log(id7);
  console.log(id8);
  return <div className="App">{/* <button>{count}</button> */}</div>;
}

export default App;
