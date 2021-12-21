import Image from "next/image";
import { IPost } from "../Post/Post";
export interface IPostPreview {
  post: IPost;
  variant: string;
}

const PostPreview = ({ post, variant }: IPostPreview) => {
  return (
    <div className="post-preview-md">
      <Image
        src={`https:${post.hero.url}`}
        alt={post.hero.alt}
        layout="fill"
        className="hero-post-preview-state"
      />
      <div className="post-preview-information-state">
        {post.title}
        {post.author}
        {post.category}
      </div>
    </div>
  );
};

export default PostPreview;
