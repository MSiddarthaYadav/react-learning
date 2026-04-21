import React from "react";

function Events() {
  return (
    <div>

      {/* Mouse Event */}
      <div onClick={() => console.log("Clicked")}>
        Mouse
      </div>

      {/* Keyboard Event */}
      <input onKeyDown={(e) => console.log(e.key)} placeholder="Keyboard" />

      {/* Form Event */}
      <form onSubmit={(e) => { e.preventDefault(); alert("Submit"); }}>
        <button>Submit</button>
      </form>

      {/* Focus Event */}
      <input
        onFocus={() => console.log("Focus")}
        onBlur={() => console.log("Blur")}
        placeholder="Focus"
      />

      {/* Clipboard Event */}
      <input
        onCopy={() => console.log("Copy")}
        onPaste={() => console.log("Paste")}
        placeholder="Clipboard"
      />

    </div>
  );
}

export default Events;