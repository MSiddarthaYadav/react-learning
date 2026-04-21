import React, { useRef } from "react";

function RefExample() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // focus input
    console.log(inputRef.current.value); // get value
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter text" />
      <button onClick={handleClick}>Focus & Get Value</button>
    </div>
  );
}

export default RefExample;