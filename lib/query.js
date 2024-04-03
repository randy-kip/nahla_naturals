// nahla_naturals\lib\query.js
import { client, urlFor } from "./client";

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// export const getStaticProps = async ({slug}) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]';

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return { products, product };
// };

export async function getStaticProps({ params }) {
  const { slug } = params;
  
  const product = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );
  const productsQuery = await client.fetch('*[_type == "product"]');
  
  return {
    props: {
      product,
      productsQuery
    }
  };
}