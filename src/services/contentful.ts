import { createClient, CreateClientParams } from "contentful";
import { contenfulImageFormated } from "src/utils/formating";

const params = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
} as CreateClientParams;

export const getPosts = async () => {
  const client = createClient(params);
  const { items } = await client.getEntries({
    content_type: "post",
  });
  console.log(typeof items);
  const posts: Array<Object> = items.map((post: Object): Object => {
    const fields = post.fields;
    return {
      title: fields.title,
      body: fields.body,
      hero: contenfulImageFormated(fields.hero),
      author: fields.author,
      category: fields.category,
      date: fields.date,
    };
  });
  return posts || null;
};
