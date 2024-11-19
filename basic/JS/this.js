const person1 = {
  name: "Joe",
  age: 25,
  sayHi: function () {
    console.log("this", this);
  },
  getAge: function () {
    console.log("Age:", this.age);
  },
};

// this keyword is a reference to the object that is executing the current function
// 1. if this is in a normal function, this will be the global/window object

// person1.sayHi();

const person2 = {
  name: "Mike",
  age: 30,
  sayHi: person1.sayHi,
};

// person2.sayHi();

const getAge = person1.getAge.bind(person2);
// getAge();

// (function foqiwjfoiwq() {
//   console.log("this", this);
// })()

const person3 = {
  fname: "Jake",
  friends: ["John", "Jane"],
  getFriendNames: function () {
    // this refers to person3
    console.log("line 36", this);

    // in es5, if there is no arrow function, we can use bind to bind the this keyword
    // this.friends.forEach(
    //   function (friend) {
    //     // without bind, this would refer to the global object
    //     // with bind, this refers to person3
    //     console.log(this.fname + " and " + friend + " are friends");
    //   }.bind(this)
    // );

    // in es6, we can use arrow functions
    this.friends.forEach((friend) => {
      console.log(this.fname + " and " + friend + " are friends");
    });
  },
};

// in es5, we did not have arrow functions
// in es6, we introduced arrow functions

// person3.getFriendNames();

// arrow functions do not have their own this keyword

const uniqueArrow = () => {
  console.log("this", this);
};

// uniqueArrow();

// console.log(person1.sayHi === person2.sayHi);
