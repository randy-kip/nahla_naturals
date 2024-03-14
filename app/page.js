import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Essential Oils to fit your Lifestyle</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>

      Footer
    </>
  );
};

export default Home;
