import React, { useState } from "react";

// if you import a "default export",
// you can name it anything you want
// import anything from "./module";

// you are importing a named export
// have to be the same name as the export
// import { add, subtract } from "./module";

// you can combine default and named export
import anything, { add, subtract } from "./module";
// console.log(anything);
// console.log(add(1, 2));
// console.log(subtract(1, 2));

// file naming convention
// 1. end it with .jsx | .tsx, to tell that this file contains JSX code
// 2. start with a capital letter

// rules about React components:
// 1. First letter of the component name should be capital

// important notes about components
// 1. always remember to close your tags, be aware of self-closing tags

import Gallery from "./Gallery";
import ConditionalRendering from "./ConditionalRendering";
import List from "./List";

export default function Day2() {
  const [bool, toggle] = useState(true);

  const handleClick = () => {
    console.log("clicked");
  };

  const rerender = () => {
    toggle(!bool);
  };

  return (
    <div>
      <h2>Day 2</h2>
      <button onClick={rerender}>Rerender</button>
      <List />
      {/* <ConditionalRendering /> */}
      {/* please practice using intellisense to import variables */}
      <Gallery
        // we can pass a string to a prop inside a quote
        a="a"
        // you can put string in {} too
        conditionalStr={true ? "true string" : "false string"}
        interpolation={`string ${1 + 1 + 1}`}
        str={"string" + "string" + "string"}
        // we can pass a number inside {}
        num={1}
        // boolean
        isReal={true}
        // other primitive types

        // object: very important: double curly braces
        person={{
          name: "Gregorio Y. Zara",
          theme: {
            backgroundColor: "black",
            color: "pink",
          },
        }}
        // array
        todos={["eat", "sleep", "code"]}
        // function
        // we want to pass a callback function as a prop
        handleClick={handleClick}
        // Note: handleClick() is not a function, this is the result of the calling the function
        // handleClick={handleClick()}

        // technically, you can pass literally any variable
        react={React}
      />
    </div>
  );
}

// Foo: `key` is not a prop. Trying to access it will result in `undefined` being returned.
// If you need to access the same value within the child component,
// you should pass it as a different prop.
function Foo(props) {
  return <div>{props.key}</div>;
}
