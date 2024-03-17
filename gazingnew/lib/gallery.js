import { createClient, groq } from 'next-sanity'

export const client = createClient({
    projectId: "ev5z6hkg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-02-06",
    token: process.env.SANITY_SECRET_TOKEN ,
});



export async function getPhotos(){
    const photos = await client.fetch(groq`*[_type == 'gallery']`);
    return photos;
  }