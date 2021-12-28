import { IPost } from "components/Post";
import PostPreview from "components/PostPreview";

interface IGridPostPreview {
  posts: Array<IPost>;
}

const PostPreviewsGrid = ({ posts }: IGridPostPreview) => {
  return (
    <>
      <div className="postPreviewGrid">
        <div className="PostPreviewsGridCards">
          {posts.map((post, key) => (
            <PostPreview
              variant="card"
              post={post}
              key={`post-preview-card-${key}`}
            />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .postPreviewGrid {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 2em;
          }
          .PostPreviewsGridCards {
            display: grid;
            grid-template-columns: 33.3% 33.3% 33.3%;
            row-gap: 1em;
            width: 100%;
            justify-items: center;
          }
        `}
      </style>
    </>
  );
};

export default PostPreviewsGrid;
