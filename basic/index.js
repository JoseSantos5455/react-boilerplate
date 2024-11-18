// console.log("hello world");

const fname = "John";

function foo(name) {
  console.log(fname);
}

// foo()

// const person1 = {
//   name: "Joe",
//   age: 25,
//   address: {
//     street: "123 main st",
//     city: "New York",
//   },
// };

// const arr = []

// const person2 = person1;
// const person3 = person2;

// function bar(person) {
//   person.name = "Mike";
// }
// bar(person3);
// console.log(person1.name);

////////// Prototype //////////

// console.log([] instanceof Array);
// forEach, map, filter, find, push, sort,
// join, reduce, reverse, slice, includes

// console.log(Array.from)

// console.log({} instanceof Object);

////////////////////////////////////////// Copying Objects //////////////////////////////////////////
const person1 = {
  name: "Joe",
  age: 25,
  address: {
    street: "123 main st",
    city: "New York",
  },
  sayHi: () => {
    console.log("Hi");
  },
};
// const newPerson = Object.assign({}, person1);
// {...person1} is the same as doing this

// const newPerson = {
//   name: person1.name,
//   age: person1.age,
//   address: person1.address,
// };

// newPerson.name = "Jake";
// console.log("newPerson", newPerson.address);
// console.log("person1", person1.address);
// console.log(person1.address == newPerson.address);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const clone = {
  ...person1,
  name: "Mike",
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// console.log(clone);

// deep clone
const str = JSON.stringify(person1);
// console.log(str);
const deepClone = JSON.parse(str);
// console.log(deepClone);
// // JSON stringify and parse will not work with functions

// better way
// use a 3rd party library like lodash: _.cloneDeep(obj)
// const deepClone2 = _.cloneDeep(person1);
// console.log(deepClone2);

// this keyword
// https://www.youtube.com/watch?v=gvicrj31JOM&t=18s&ab_channel=ProgrammingwithMosh

// bind, apply, call
