import EditoralStory from "components/EditorialStory";
import BrowseAll from "components/BrowseAll";
import BlogSectionHeader from "components/BlogSectionHeader";
import { IPost } from "components/Post";
import { useState } from "react";
import { extractCategoriesFormated } from "src/utils/formating";
import { BlogSectionVariants } from "src/utils/contentfulEnums";

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
  const categories: string[] = extractCategoriesFormated(posts);
  return (
    <>
      <div className="blog-section">
        <div className="blog-section-header-container">
          <BlogSectionHeader
            title={title}
            categoryFilter={categoryFilter}
            categories={categories}
          />
        </div>
        <div>
          {variant === BlogSectionVariants.editorialStory ? (
            <EditoralStory posts={posts} />
          ) : null}
          {variant === BlogSectionVariants.browseAll ? (
            <BrowseAll posts={posts} />
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .blog-section {
            background-color: ${variant === "browseAll"
              ? "rgb(242, 248, 251)"
              : "	rgba(255,255,255,0)"};
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