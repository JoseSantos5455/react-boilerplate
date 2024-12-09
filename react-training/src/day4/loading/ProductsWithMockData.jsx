import React, { useEffect, useState } from "react";
import { fetchProducts } from "./mockAPI";

// Backend team does not have the API ready yet
// but they give you the documentation for the returned data type

export default function ProductsWithMockData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </div>
  );
}
