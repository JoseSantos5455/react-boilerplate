import React, { Component } from "react";

const PRODUCT_API = "https://fakestoreapi.com/products?limit=5";

export default class ClassProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // 2. after the initial render, componentDidMount is called
  componentDidMount() {
    fetch(PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        // 3. products is updated with the fetched data
        this.setState({ products: data });
      });
  }

  // 1. products is [], we render an empty array
  // 4. state update causes re-render, products is not empty anymore
  render() {
    const { products } = this.state;

    return (
      <div>
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
}
