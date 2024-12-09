import React from "react";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isRedBorder: true,
    };
    this.increment = this.increment.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  //   lifecycle methods demonstration
  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");

    if (prevState.count !== this.state.count) {
      console.log("Count updated");
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  changeColor() {
    this.setState({ isRedBorder: !this.state.isRedBorder });
  }

  render() {
    return (
      <div
        style={{
          border: `2px solid ${this.state.isRedBorder ? "red" : "blue"}`,
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <h2>Class counter</h2>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

// Class examples, the followings have nothing to do React
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     // super is calling the Parent class constructor
//     super(name);
//     this.status = "sick";
//   }

//   eat() {
//     if (this.status === "sick") {
//       console.log("Dog is sick, can't eat");
//     }
//   }
// }

// const dog = new Dog("Buddy");
// // console.log("dog", dog);
// dog.eat();
