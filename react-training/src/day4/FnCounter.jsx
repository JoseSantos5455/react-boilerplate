import React, { useEffect, useState } from "react";

export default function FnCounter() {
  const [count, setCount] = useState(0);
  const [isRedBorder, setIsRedBorder] = useState(true);

  function increment() {
    setCount(count + 1);
  }

  function changeColor() {
    setIsRedBorder(!isRedBorder);
  }

  //   in function components, we don't have lifecycle methods
  //   we can use useEffect hook to mimic lifecycle methods

  //   mimic componentDidMount
  //   empty array means it will run only once
  //   all useEffects run on initial render
  useEffect(() => {
    console.log("Mimic: Component did mount");

    // mimic componentWillUnmount
    return () => {
      console.log("Mimic: Component will unmount");
    };
  }, []);

  //   mimic componentDidUpdate
  //   when there is no dependency array, it will run every time the component updates
  //   useEffect(() => {
  //     console.log("Mimic: Component did update");
  //   });

  //   when we do have a dependency array, it will run only when the dependency changes
  useEffect(() => {
    console.log("Component did update: count");
  }, [count]);

  useEffect(() => {
    console.log("Component did update: isRedBorder");
  }, [isRedBorder]);

  return (
    <div
      style={{
        border: `2px solid ${isRedBorder ? "red" : "blue"}`,
        marginTop: "5px",
        padding: "5px",
      }}
    >
      <h2>Function counter</h2>
      <div>Counter: {count}</div>
      <button onClick={increment}>Add</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
