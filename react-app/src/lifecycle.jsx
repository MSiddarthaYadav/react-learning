import { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted/Updated");
    return () => console.log("Cleanup");
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Lifecycle;