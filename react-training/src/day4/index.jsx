import React from "react";
import ClassCounter from "./ClassCounter";
import FnCounter from "./FnCounter";
import FnProducts from "./lifecycle/FnProducts";
import ClassProducts from "./lifecycle/ClassProducts";
import Posts from "./loading/Posts";
import ProductsWithMockData from "./loading/ProductsWithMockData";

export default function Day4() {
  return (
    <div>
      <h1>Day 4</h1>
      {/* <FnCounter /> */}
      {/* <ClassCounter /> */}

      {/* Lifecycle */}
      {/* <FnProducts /> */}
      {/* <ClassProducts /> */}

      {/* Loading and error handling */}
      {/* <Posts /> */}
      <ProductsWithMockData />
    </div>
  );
}
