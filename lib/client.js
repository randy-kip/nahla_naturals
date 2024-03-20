import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "80cjm1gx",
  dataset: "production",
  apiVersion: "2024-03-18",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});


export async function getProducts() {
  const products = await client.fetch('*[_type == "product"]');
  return products;
}
export async function getBanner() {
  const bannerData = await client.fetch('*[_type == "banner"]');
  return bannerData;
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
