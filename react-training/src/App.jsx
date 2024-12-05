import { useState } from "react";
import "./App.css";
import Day2 from "./day2/Day2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Day2 />
    </>
  );
}

export default App;
