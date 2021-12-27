import { IPost } from "components/Post";
import PostPreview from "components/PostPreview";

interface IBrowseAll {
  posts: Array<IPost>;
}

const BrowseAll = ({ posts }: IBrowseAll) => {
  return (
    <>
      <div className="browseAll">
        <div className="gridPostPreviewsCards">
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
          .browseAll {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 2em;
          }
          .gridPostPreviewsCards {
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

export default BrowseAll;
