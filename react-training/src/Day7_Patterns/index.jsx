import React, { useEffect, useState } from "react";
import ClassPosts from "./ClassPosts";
// this component is NOT the component in ClassUsers.jsx line 5
import ClassUsers from "./ClassUsers";
import ClassComments from "./ClassComments";
import BorderColor from "./components/BorderColor";

// Rules about hooks
// 1. Hooks can only be called inside a function component or a custom hook
// 2. Hooks can not be used conditionally (no if statements)
// (number of hooks should be same on every render)

export default function Day7() {
  return (
    <div>
      <h1>Day 7</h1>
      {/* <ClassPosts />
      <ClassComments /> */}

      <ClassUsers title="All my users" />
    </div>
  );
}
