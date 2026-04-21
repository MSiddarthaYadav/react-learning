import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "dec") return state - 1;
  if (action.type === "inc") return state + 1;
  return state;
}

function UseReducerExample() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </div>
  );
}

export default UseReducerExample;