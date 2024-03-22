import React from "react";
import { client, getBanner, getProducts } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = async () => {
  const bannerData = await getBanner();
  const products = await getProducts();
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Essential Oils to fit your Lifestyle</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        {/* {console.log(products)} */}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Home;
