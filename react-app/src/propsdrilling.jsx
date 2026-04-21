function Child({ message }) {
  return <h2>{message}</h2>;
}

function Parent({ message }) {
  return <Child message={message} />;
}

function PropsDrilling() {
  const text = "Hello from Parent";
  return <Parent message={text} />;
}

export default PropsDrilling;