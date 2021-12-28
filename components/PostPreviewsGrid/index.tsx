import CustomButton from "components/CustomButton";
import { IPost } from "components/Post";
import PostPreview from "components/PostPreview";
import { useEffect, useState } from "react";

interface IGridPostPreview {
  posts: Array<IPost>;
  loadMoreButton?: boolean;
}

const PostPreviewsGrid = ({ posts, loadMoreButton }: IGridPostPreview) => {
  const [currentPostsDisplayed, setCurrentPostsDisplayed] = useState<number>(6);
  const [currentPosts, setCurrentPosts] = useState<IPost[]>(posts.slice(0, 6));

  useEffect(() => {
    setCurrentPosts(posts.slice(0, currentPostsDisplayed));
  }, [currentPostsDisplayed, posts]);

  const onLoadMore = () => {
    console.log(currentPostsDisplayed);
    setCurrentPostsDisplayed(currentPostsDisplayed + 3);
  };

  return (
    <>
      <div className="postPreviewGrid">
        <div className="PostPreviewsGridCards">
          {currentPosts.map((post, key) => (
            <PostPreview
              variant="card"
              post={post}
              key={`post-preview-card-${key}`}
            />
          ))}
        </div>
        {loadMoreButton ? (
          <CustomButton label="Load More" onClick={onLoadMore} />
        ) : null}
      </div>
      <style jsx>
        {`
          .postPreviewGrid {
            display: flex;
            flex-direction: column;
            align-items: center;
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
