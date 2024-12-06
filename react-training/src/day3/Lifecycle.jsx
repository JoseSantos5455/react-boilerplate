import React, { useState } from "react";

// Components hae 3 main lifecycle events:
// mount (birth)
// update (growing up)
// unmount (death)

export default function Lifecycle() {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {show && <ClassCounter a="a" />}
    </div>
  );
}

class ClassCounter extends React.Component {
  constructor(props) {
    console.log("Constructor");

    super(props);
    this.state = {
      count: 0,
    };
  }

  //   this will be triggered when the component is mounted (birth)
  //   only triggers once in a lifecycle (life time)
  componentDidMount() {
    console.log("Component mounted");
  }

  //   this will trigger when the component is updated / re-rendered (growing up)
  componentDidUpdate() {
    console.log("Component updated");
  }

  //   this will trigger moment before the component is unmounted (death)
  componentWillUnmount() {
    console.log("Component will be unmounted right after this");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   render should be pure
  //   given the same props and states, it should always return the same output (JSX)
  //   you should NOT create any side effects in render

  //   side effects can only be done in lifecycle methods & event handlers
  render() {
    return (
      //   styles should almost always be defined using className
      <div style={{ border: "2px solid red", marginTop: "5px" }}>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// react uses a virtual DOM as a copy of the real DOM
// when a component is updated, react will have two copies of the virtual DOM
// an old copy and a new copy

// old copy of the virtual dom
{
  /* <div>
    <h2>Counter</h2>
    <div>Count: 0</div>
</div> */
}

// new copy of the virtual dom
{
  /* <div>
    <h2>Counter</h2>
    <div>Count: 1</div>
</div> */
}

// react will compare the two copies of the virtual DOM
// only update the real DOM with the differences between the two copies
// (only changing the count from 0 to 1)
