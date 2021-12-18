import { useState, useEffect } from "react";
import { IPost } from "../Post/Post";

export interface IPostPreview {
  post: any;
  variant: string;
}

const PostPreview = ({ post, variant }: IPostPreview) => {
  return (
    <div>
      {post.title}
      {post.author}
      {post.category}
    </div>
  );
};

export default PostPreview;
