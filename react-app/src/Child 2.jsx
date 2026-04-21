function Child({ value }) {
  return <h3>{value}</h3>;
}

export default Child;




// User types
//    ↓
// Parent state updates
//    ↓
// Props passed to Child
//    ↓
// Child displays value