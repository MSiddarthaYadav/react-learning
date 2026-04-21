import React, { useRef } from "react";
import Child from "./Child.jsx";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // access child input
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleClick}>Focus Child Input</button>
    </div>
  );
}

export default App;