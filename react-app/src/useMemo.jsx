import { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>{expensiveValue}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
}