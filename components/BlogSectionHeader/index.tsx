import { IPost } from "components/Post";
import { extractCategoriesFormated } from "src/utils/formating";
import PostPreviewFilter from "components/PostPreviewFilter";

interface IBlogSectionHeader {
  title?: string;
  categoryFilter?: boolean;
  posts: Array<IPost>;
}

const BlogSectionHeader = ({
  title,
  categoryFilter,
  posts,
}: IBlogSectionHeader) => {
  const categories: string[] = extractCategoriesFormated(posts);
  return (
    <>
      <div className="blog-section-header">
        <h2 className="title">{title}</h2>
        {categoryFilter ? <PostPreviewFilter options={categories} /> : null}
      </div>
      <style jsx>
        {`
          .blog-section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 92%;
          }
          .title {
            width: -moz-fit-content;
            width: fit-content;
            letter-spacing: 0.1115em;
            font-weight: 800;
            box-shadow: inset 0 -10px 0 rgb(255, 216, 95);
          }
        `}
      </style>
    </>
  );
};

export default BlogSectionHeader;
