

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(name); }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default Form;