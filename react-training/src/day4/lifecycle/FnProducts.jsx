import React, { useEffect, useState } from "react";

const PRODUCT_API = "https://fakestoreapi.com/products?limit=5";

export default function FnProducts() {
  // important: always initialize state with the same type as the expected value
  const [products, setProducts] = useState([]);

  // 2. after the initial render, the callback inside useEffect with [] is called
  useEffect(() => {
    fetch(PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // 3. products is updated with the fetched data
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {/* // 1. products is [], we render an empty array */}
      {/* // 4. state update causes re-render, products is not empty anymore */}
      <h2>Products</h2>

      <div>
        {products.map((product) => {
          const { id, title, price } = product;
          return (
            <div key={id}>
              <h3>{title}</h3>
              <div>{price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
