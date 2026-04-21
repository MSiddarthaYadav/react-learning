import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default UseRefExample;