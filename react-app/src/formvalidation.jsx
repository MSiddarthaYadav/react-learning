import { useState } from "react";

export default function FormValidation() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        !name ? setError("Name is required") : (setError(""), alert("Form Submitted"));
      }}
    >
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <p style={{ color: "red" }}>{error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}