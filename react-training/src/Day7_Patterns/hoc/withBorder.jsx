import React from "react";

// this logic actually doesn't require an HOC
// HOC reuses component state and lifecycle logic

// instead of using an HOC, we can just create another component

export default function withBorder(OldComponent, color) {
  return class NewComponent extends React.Component {
    render() {
      return (
        <div style={{ border: `2px solid ${color}`, padding: "5px" }}>
          <OldComponent />
        </div>
      );
    }
  };
}
