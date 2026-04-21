import React, { useState } from "react";

function Counter({ name }) {   // ✅ props received here
  const [count, setCount] = useState(0);  // ✅ state

  return (
    <div>
      <h2>Hello, {name}</h2>   {/* using props */}

      <h3>Count: {count}</h3>  {/* using state */}

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;