import React from "react";

const person = { name: "Jack" };

export default function ConditionalRendering() {
  const boolean = true;

  const boolean2 = 0;

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      {undefined}
      {null}
      {false}
      <h3>Conditional Rendering</h3>
      {/* conditional rendering with ternary operator */}
      {boolean ? <div>True</div> : <div>False</div>}

      {/* be careful if the first value is 0 */}
      {boolean2 && <div>Will only show if true</div>}
    </div>
  );
}
