import EditoralStory from "components/EditorialStory/EditorialStory";
import { IPost } from "components/Post/Post";

interface IBlogSection {
  title?: string;
  posts: Array<IPost>;
  variant: string;
  filter?: boolean;
}

const BlogSection = ({ title, variant, filter, posts }: IBlogSection) => {
  return (
    <div>
      {title}
      {variant === "editorialStory" ? <EditoralStory posts={posts} /> : null}
    </div>
  );
};

export default BlogSection;
