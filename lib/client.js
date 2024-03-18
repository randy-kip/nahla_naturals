import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = SanityClient({
    projectId: '80cjm1gx',
    dataset: 'production',
    apiVersion: '2024-03-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);