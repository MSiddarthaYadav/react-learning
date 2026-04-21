function Embedding() {
  const name = "Siddartha";
  const isLoggedIn = false;

  function greet() {
    return "Good Morning";
  }

  return (
    <div>
      <h1>{name}</h1>                 
      <h2>{2 + 5}</h2>               
      <h3>{greet()}</h3>            

      <p>
        {isLoggedIn ? "Welcome" : "Please Login"}
      </p>                         
    </div>
  );
}

export default Embedding;