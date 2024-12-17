import React from "react";

// this is an alternative to using an HOC
// if you don't need to reuse component state and lifecycle logic

export default function BorderColor({ color, children }) {
  return (
    <div style={{ border: `2px solid ${color}`, padding: "5px" }}>
      {children}
    </div>
  );
}
