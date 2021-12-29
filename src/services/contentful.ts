import { createClient, CreateClientParams, Entry } from "contentful";
import {
  contenfulDateFormated,
  contenfulImageFormated,
  formatBody,
} from "src/utils/formating";
import { IPost } from "components/Post";

const params = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
} as CreateClientParams;

export const fetchPosts = async () => {
  const client = createClient(params);
  const { items } = await client.getEntries({
    content_type: "post",
  });
  const posts: Array<IPost> = items.map((post: Entry<any>): IPost => {
    const fields = post.fields;
    return {
      title: fields.title,
      body: formatBody(fields.body),
      hero: contenfulImageFormated(fields.hero),
      author: fields.author,
      category: fields.category,
      date: contenfulDateFormated(fields.date),
      slug: fields.slug,
    };
  });
  return posts || null;
};
