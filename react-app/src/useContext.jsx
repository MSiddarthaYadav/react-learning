import { createContext, useContext } from "react";

const MyContext = createContext();

function Child() {
  const data = useContext(MyContext);
  return <h3>{data}</h3>;
}

function UseContextExample() {
  return (
    <MyContext.Provider value="Hello Context">
      <Child />
    </MyContext.Provider>
  );
}

export default UseContextExample;