import { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click</button>;
}

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      <Child handleClick={handleClick} />
    </div>
  );
}