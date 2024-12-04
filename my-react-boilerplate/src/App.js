import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <div>{uuidv4()}</div>
    </div>
  );
}
