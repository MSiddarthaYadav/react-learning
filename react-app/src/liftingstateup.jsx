import { useState } from "react";
import Child from "./Child";

function LiftingStateUp() {
  const [text, setText] = useState("");

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <Child value={text} />
    </div>
  );
}

export default LiftingStateUp;



// import { useState } from "react";

// function Input({ value, setValue }) {
//   return (
//     <input
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       placeholder="Type..."
//     />
//   );
// }

// function Display({ value }) {
//   return <h3>{value}</h3>;
// }

// function LiftingStateUp() {
//   const [text, setText] = useState(""); // lifted state

//   return (
//     <div>
//       <Input value={text} setValue={setText} />
//       <Display value={text} />
//     </div>
//   );
// }

// export default LiftingStateUp;