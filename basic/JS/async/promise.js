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
  // console.log(value);
});



// Other static methods of Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all



class MyPromise {
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let results = [];
      let completed = 0;
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise)
          .then((value) => {
            results[index] = value;
            completed += 1;
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  }

  static resolve(value) {
    return new MyPromise((res) => {
      res(value);
    });
  }

  constructor(callback) {
    this.onSuccess = [];
    this.onReject = [];
    this.status = "pending";
    this.fulfilledValue = null;
    this.rejectedValue = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.fulfilledValue = value;
        this.onSuccess.forEach((callback) => callback(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.rejectedValue = value;
        this.onReject.forEach((callback) => callback(value));
      }
    };

    try {
      callback(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(callback) {
    return new MyPromise((resolve, reject) => {
      const handleSuccess = (value) => {
        try {
          const result = callback(value);
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === "fulfilled") {
        handleSuccess(this.fulfilledValue);
      } else if (this.status === "pending") {
        this.onSuccess.push(handleSuccess);
      }

      if (this.status === "rejected") {
        reject(this.rejectedValue);
      } else if (this.status === "pending") {
        this.onReject.push(reject);
      }
    });
  }

  catch(callback) {
    return new MyPromise((resolve, reject) => {
      const handleError = (value) => {
        try {
          const result = callback(value);
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === "rejected") {
        handleError(this.rejectedValue);
      } else if (this.status === "pending") {
        this.onReject.push(handleError);
      }

      if (this.status === "fulfilled") {
        resolve(this.fulfilledValue);
      } else if (this.status === "pending") {
        this.onSuccess.push(resolve);
      }
    });
  }

  finally(callback) {
    const handler = () => {
      callback();
      if (this.status === "fulfilled") {
        return this.fulfilledValue;
      }
      throw this.rejectedValue;
    };

    return this.then(handler, handler);
  }
}

// const p = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res("1000 later");
//   }, 1000);
// });

// p.then((value) => {
//   console.log("value", value);
//   return "Chained value";
// }).then(console.log);
