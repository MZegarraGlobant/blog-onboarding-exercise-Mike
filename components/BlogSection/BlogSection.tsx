import { useState, useEffect } from "react";
import PostPreview from "components/PostPreview/PostPreview";

interface IBlogSection {
  title?: string;
  posts: Array<any>;
  variant: string;
  filter?: boolean;
}

const BlogSection = ({ title, variant, filter, posts }: IBlogSection) => {
  return (
    <div>
      {title}
      {posts.map((element, key) => (
        <PostPreview
          post={element}
          variant={variant}
          key={`${element.title}-preview-${key}`}
        />
      ))}
    </div>
  );
};

export default BlogSection;
