// sync operations will always run before async operations due to the event loop

const p = new Promise((resolve, reject) => {
  //   console.log("promise");
  resolve("valueeee");
  //   reject("Rejected");
});

// macro task & micro task
// this is a macro task
setTimeout(() => {
  //   console.log("time out 0");
}, 0);

// this is a micro task (priority)
p.then((value) => {
  //   console.log("value", value);
});

// console.log("hello");

// async functions always return a promise
// that resolves to the return value of the function
async function example1() {
  return "example1";
}

const example2 = async () => {};

example1().then((value) => {
  console.log(value);
});



// Other static methods of Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all