function ErrorHandling() {
  const handleClick = () => {
    try {
      throw new Error("Error occurred");
    } catch (err) {
      alert(err.message);
    }
  };

  return <button onClick={handleClick}>Click</button>;
}

export default ErrorHandling;