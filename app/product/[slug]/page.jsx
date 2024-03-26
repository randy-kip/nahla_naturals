import React from "react";
import { client, urlFor } from "@/lib/client";

const ProductDetails = ({ product, productsQuery }) => {
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

export async function getProducts({ params: { slug } }) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );

  const productsQuery = await client.fetch('*[_type == "product"]');

  console.log(product);
  return { product, productsQuery };
}

export default ProductDetails;
