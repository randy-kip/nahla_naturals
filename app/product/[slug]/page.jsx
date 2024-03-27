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

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  // const client = getClient(); // Obtain your Sanity client instance
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

// export async function getProducts() {
//   const products = await client.fetch('*[_type == "product"]');
//   return products;
// }

export async function getProductDetails({ params: { slug } }) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );

  const productsQuery = await client.fetch('*[_type == "product"]');

  console.log(product);
  return { product, productsQuery };
}

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]';

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product },
//   };
// };

export default ProductDetails;
