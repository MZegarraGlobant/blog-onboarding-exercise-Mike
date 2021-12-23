import Image from "next/image";
import { IPost } from "../Post/Post";
export interface IPostPreview {
  post: IPost;
  variant?: string;
}

const PostPreview = ({ post, variant }: IPostPreview) => {
  return (
    <>
      <div className={`post-preview-${variant}-md`}>
        <div className={`hero-post-preview-${variant}-state`}>
          <Image
            src={`https:${post.hero.url}`}
            alt={post.hero.alt}
            layout="fill"
          />
        </div>
        <div className={`post-preview-information-${variant}-state`}>
          <span className={`category-tag-${variant}-state`}>
            {post.category}
          </span>
          <span className={`post-preview-title-${variant}-state`}>
            {post.title}
          </span>
          <div className={`post-preview-date-author-${variant}-md`}>
            <span className={`post-preview-date-${variant}-state`}>
              {post.date}
            </span>
            <span className={`post-preview-author-${variant}-state`}>
              {post.author}
            </span>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .post-preview-front-md {
            width: 45em;
            height: 25em;
            display: flex;
            align-items: flex-end;
            position: relative;
          }
          .post-preview-information-front-state {
            width: 100%;
            height: 10em;
            background-color: rgba(255, 255, 255, 0.74);
            display: flex;
            flex-direction: column;
            padding: 1.5em;
          }
          .hero-post-preview-front-state {
            z-index: -1;
          }
          .category-tag-front-state {
            color: rgb(11, 106, 230);
            text-transform: uppercase;
            font-size: medium;
          }
          .post-preview-title-front-state {
            color: rgb(42, 48, 57);
            font-weight: 500;
            font-size: x-large;
            margin-top: 0.35em;
          }
          .post-preview-date-author-front-md {
            margin-top: 1em;
            font-weight: 100;
          }
          .post-preview-date-front-state {
            margin-right: 1em;
          }
          .post-preview-date-front-state:after {
            content: "";
            background: #c3c3ce;
            position: absolute;
            margin-left: 10em;
            bottom: 0;
            left: 0;
            height: 0.8em;
            width: 1.5px;
            transform: translateY(-360%);
          }

          .post-preview-column-md {
            width: 21em;
            height: 6em;
            display: flex;
            align-items: center;
            position: relative;
          }
          .hero-post-preview-column-state {
            position: relative;
            width: 18em;
            height: 6em;
            z-index: -1;
          }
          .post-preview-information-column-state {
            width: 100%;
            height: 5em;
            display: flex;
            flex-direction: column;
            margin-left: 0.5em;
          }
          .category-tag-column-state {
            color: rgb(11, 106, 230);
            text-transform: uppercase;
          }
          .post-preview-title-column-state {
            color: rgb(42, 48, 57);
            font-weight: 500;
            font-size: medium;
          }
          .post-preview-date-author-column-md {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default PostPreview;
