import EditoralStory from "components/EditorialStory";
import PostPreviewsGrid from "components/PostPreviewsGrid";
import BlogSectionHeader from "components/BlogSectionHeader";
import { IPost } from "components/Post";
import { BlogSectionVariants, FilterVariants } from "src/utils/contentfulEnums";
import { useState } from "react";

interface IBlogSection {
  title?: string;
  posts: Array<IPost>;
  variant: string;
  categoryFilter?: boolean;
}

const BlogSection = ({
  title,
  variant,
  categoryFilter,
  posts,
}: IBlogSection) => {
  const [currentPosts, setCurrentPosts] = useState<IPost[]>(posts);
  const onCategoryFilterChange = (category: string) => {
    if (category === FilterVariants.all) {
      setCurrentPosts(posts);
    } else {
      const filteredPosts = posts.filter(
        (element) => element.category === category
      );
      setCurrentPosts(filteredPosts);
    }
  };
  return (
    <>
      <div className="blog-section">
        <div className="blog-section-header-container">
          <BlogSectionHeader
            title={title}
            categoryFilter={categoryFilter}
            onCategoryChange={onCategoryFilterChange}
            posts={posts}
          />
        </div>
        <div>
          {variant === BlogSectionVariants.editorialStory ? (
            <EditoralStory posts={currentPosts} />
          ) : null}
          {variant === BlogSectionVariants.browseAll ? (
            <PostPreviewsGrid posts={currentPosts} />
          ) : null}
          {variant === BlogSectionVariants.mostPopular ? (
            <PostPreviewsGrid posts={currentPosts} loadMoreButton />
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .blog-section {
            background-color: ${variant === BlogSectionVariants.browseAll
              ? "rgb(242, 248, 251)"
              : "rgba(255,255,255,0)"};
            margin: 2em 0em;
            padding: 2em 0em;
          }
          .blog-section-header-container {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default BlogSection;
