// higher order function
// 1. A function that takes another function as an argument
// 2. A function that returns another function

function hof(callbackFn) {
  setTimeout(() => {
    console.log("hello");
    callbackFn();
  }, 2000);
}

// hof(function () {
//   console.log("Hello World");
// });

[1, 2, 3, 4].forEach((num) => {
  // this function is anonymous
  //   console.log(num);
});

// IIFE: Immediately Invoked Function Expression, "iffy"
// we do not really use this kind of things a lot
(function IIFE() {
  //   console.log("this is something that only needs to run once");
})();

// curry
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// here, in the function we are only doing one operation
// so we can use an arrow function and implicit return:
// remove the function body and the return keyword
const simpleSum = (a, b) => a + b;

const sum = (a) => (b) => (c) => a + b + c;

// console.log(sum(1)(2)(3));

// const sum = (a) => (b) => (c) => a + b + c;

// closure
// the inner function has access to the outer function's variables
function outerFn() {
  let privateVar = "I am a private variable";
  return function innerFn() {
    console.log(privateVar);
  };
}

// outerFn()();

// function baz() {
//   const hugeObject = {
//     name: "Joe",
//     age: 25,
//     address: {
//       street: "123 main st",
//       city: "New York",
//     },
//     sayHi: () => {
//       console.log("Hi");
//     },
//   };
//   console.log("hugeObject", hugeObject);
// }

// baz();

const counterFn = () => {
  let count = 0;

  return {
    add: () => count++,
    minus: () => count--,
    reset: () => {
      count = 0;
    },
    getCount: () => count,
  };
};

// const counter = counterFn();
// counter.add();
// console.log(counter.getCount());
// counter.minus();
// console.log(counter.getCount());

const drawLotto = () => {
  if (Math.random() > 0.9) {
    console.log("You won the lotto!");
  } else {
    console.log("Better luck next time!");
  }
};

// an example of higher order function
const limiterFn = (callbackFn, limit = 3) => {
  let count = 0;

  return () => {
    if (count >= limit) {
      console.log("You have reached the limit");
      return;
    }
    callbackFn();
    count++;
    // console.log("count:", count);
  };
};

const limitedLotto = limiterFn(drawLotto);

// const sayHi = limiterFn(() => console.log("hi"));
// for (let i = 0; i < 10; i++) {
//   sayHi();
// }

document.getElementById("lotto").addEventListener("click", () => {
  limitedLotto();
});

document.getElementById("input").addEventListener("input", (e) => {
  // can be optimized using debounce function
  console.log(e.target.value);
});
