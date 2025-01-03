// javascript is a single-threaded language
// it can only do one thing at a time

// console.log("start");
// // sync, blocking operations
// for (let i = 0; i < 10000; i++) {}

// //
// console.log("end");

// async operations
// setTimeout, setInterval, promises, fetch

// if everything is synchronous, the code will run from top to bottom
// function fetchPosts() {
//     const mockPosts = [
//     { title: "Post One", body: "This is post one" },
//     { title: "Post Two", body: "This is post two" },
//     ];
//   return mockPosts;
// }

// const posts = fetchPosts();
// console.log(posts);

// however, if we have async operations, then we have to use callback functions
// function fetchPosts(callback) {
//   const mockPosts = [
//     { title: "Post One", body: "This is post one" },
//     { title: "Post Two", body: "This is post two" },
//   ];
//   setTimeout(() => {
//     callback(mockPosts);
//   }, 1000);
// }

// fetchPosts((posts) => {
//   console.log("posts", posts);
// });

////////////////////// Sync Kitchen //////////////////////
// Ideally, no latency at all, everything is synchronous
const syncBurger = () => {
  function getBeef() {
    console.log("getting beef");
    return "beef";
  }

  function cookBeef(beef) {
    if (beef === "beef") {
      console.log("cooking beef");
      return "patty";
    } else {
      throw new Error("This is not beef");
    }
  }

  function getBun() {
    console.log("getting bun");
    return "bun";
  }

  function getLettuce() {
    console.log("getting lettuce");
    return "lettuce";
  }

  function assembleBurger(patty, bun, lettuce) {
    console.log("assembling burger");
    if (patty === "patty" && bun === "bun" && lettuce === "lettuce") {
      return "burger";
    } else {
      throw new Error("Burger not assembled");
    }
  }

  const beef = getBeef();
  const patty = cookBeef(beef);
  const bun = getBun();
  const lettuce = getLettuce();
  const burger = assembleBurger(patty, bun, lettuce);
  console.log(burger);
};

// syncBurger();

////////////////////// Async Kitchen (Callback) //////////////////////

const asyncCallbackBurger = () => {
  function getBeef(callback) {
    setTimeout(() => {
      console.log("getting beef");
      callback("beef");
    }, 500);
  }

  function cookBeef(beef, callback) {
    if (beef !== "beef") throw new Error("This is not beef");
    setTimeout(() => {
      console.log("cooking beef");
      callback("patty");
    }, 1500);
  }

  function getBun(callback) {
    setTimeout(() => {
      console.log("getting bun");
      callback("bun");
    }, 500);
  }

  function getLettuce(callback) {
    setTimeout(() => {
      console.log("getting lettuce");
      callback("lettuce");
    }, 500);
  }

  function assembleBurger(patty, bun, lettuce, callback) {
    if (patty !== "patty" || bun !== "bun" || lettuce !== "lettuce")
      throw new Error("Wrong ingredients, burger not assembled");

    setTimeout(() => {
      console.log("assembling burger");
      callback("burger");
    }, 1500);
  }

  getBeef((beef) => {
    cookBeef(beef, (patty) => {
      getBun((bun) => {
        getLettuce((lettuce) => {
          assembleBurger(patty, bun, lettuce, (burger) => {
            // string literal / string interpolation
            console.log(`put ${burger} in trash`);
          });
        });
      });
    });
  });
};

// asyncCallbackBurger();

////////////////////// Async Kitchen (Promise) //////////////////////

const asyncPromiseBurger = () => {
  function getBeef() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getting beef");
        resolve("beef");
      }, 500);
    });
  }

  function cookBeef(beef) {
    return new Promise((resolve, reject) => {
      if (beef !== "beef") reject("This is not beef");
      setTimeout(() => {
        console.log("cooking beef");
        resolve("patty");
      }, 1500);
    });
  }

  function getBun() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getting bun");
        resolve("bun");
      }, 500);
    });
  }

  function getLettuce() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getting lettuce");
        resolve("lettuce");
      }, 500);
    });
  }

  function assembleBurger(patty, bun, lettuce) {
    return new Promise((resolve, reject) => {
      if (patty !== "patty" || bun !== "bun" || lettuce !== "lettuce")
        reject("Wrong ingredients, burger not assembled");
      setTimeout(() => {
        console.log("assembling burger");
        resolve("burger");
      }, 1500);
    });
  }

  //   const ingredients = {};
  //   getBeef()
  //     .then((beef) => {
  //       return cookBeef(beef);
  //     })
  //     .then((patty) => {
  //       ingredients.patty = patty;
  //       return getBun();
  //     })
  //     .then((bun) => {
  //       ingredients.bun = bun;
  //       return getLettuce();
  //     })
  //     .then((lettuce) => {
  //       const patty = ingredients.patty;
  //       const bun = ingredients.bun;
  //       return assembleBurger(patty, bun, lettuce);
  //     });

  //   getBeef().then((beef) => {
  //     cookBeef(beef).then((patty) => {
  //       getBeef().then((bun) => {
  //         getLettuce().then((lettuce) => {
  //           assembleBurger(patty, bun, lettuce).then((burger) => {
  //             console.log(`put ${burger} in trash`);
  //           });
  //         });
  //       });
  //     });
  //   });

  //   better approach with async / await

  //   difference between async / await and promises:
  //   async / await makes it block-like inside of the async function
  //   it makes the code more readable

  (async function () {
    const beef = await getBeef();
    const patty = await cookBeef(beef);
    const bun = await getBun();
    const lettuce = await getLettuce();
    const burger = await assembleBurger(patty, bun, lettuce);
    console.log("put", burger, "in trash");
  })();
};

// asyncPromiseBurger();








