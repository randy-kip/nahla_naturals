import React from "react";
import { client, urlFor } from "@/lib/client";
import { getStaticProps } from "@/lib/query";

const ProductDetails = async () => {
  const { product, products } = await getStaticProps();
  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0]).url()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
