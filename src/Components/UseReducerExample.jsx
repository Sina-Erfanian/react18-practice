import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: "INC" });
  }
  function decrement() {
    dispatch({ type: "DEC" });
  }

  return (
    <div>
      <h5>{state.count}</h5>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default UseReducerExample;
