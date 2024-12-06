import React, { useEffect, useState } from "react";
import "./day3.css";
import Counter from "./Counter";
import Lifecycle from "./Lifecycle";

// when importing a default export, you can name it whatever you want
// however, you cannot destructure it if it's an object
// import { add } from "./math.js"; // this will not work

// this will work
// import math from "./math.js";
// console.log(math.add);

export default function Day3() {
  return (
    <div>
      <h1>Day 3</h1>
      {/* <Counter />
      <Color className="red" />
      <Button onClick={() => console.log("Clicked")}>Click Me</Button> */}

      <Lifecycle />
    </div>
  );
}

function Color({ className }) {
  console.log(className);

  return <div className={className}>text</div>;
}

function Button({ onClick, children }) {
  console.log(children);

  return <button onClick={onClick}>{children}</button>;
}
