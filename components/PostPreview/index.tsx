import Link from "next/link";
import Image from "next/image";
import { IPost } from "../Post";

export interface IPostPreview {
  post: IPost;
  variant?: string;
}

const PostPreview = ({ post, variant }: IPostPreview) => {
  return (
    <>
      <Link href={`/post/${post.slug}`}>
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
      </Link>
      <style jsx global>
        {`
          .post-preview-front-md {
            width: 45em;
            height: 25em;
            display: flex;
            align-items: flex-end;
            position: relative;
            cursor: pointer;
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
            cursor: pointer;
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

          .post-preview-card-md {
            width: 20em;
            height: 20em;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: all 0.4s ease 0s;
            cursor: pointer;
          }
          .post-preview-card-md:hover {
            transform: translateY(-5px);
            box-shadow: rgb(0 0 0 / 25%) 0px 5px 20px 5px;
          }
          .post-preview-information-card-state {
            width: 100%;
            height: 55%;
            background-color: rgba(255, 255, 255);
            display: flex;
            flex-direction: column;
            padding: 1.5em;
          }
          .hero-post-preview-card-state {
            height: 45%;
            width: 100%;
            position: relative;
          }
          .category-tag-card-state {
            color: rgb(11, 106, 230);
            text-transform: uppercase;
            font-size: medium;
          }
          .post-preview-title-card-state {
            color: rgb(42, 48, 57);
            font-weight: 500;
            font-size: x-large;
            margin-top: 0.35em;
          }
          .post-preview-date-author-card-md {
            margin-top: 1em;
            font-weight: 100;
          }
          .post-preview-date-card-state {
            margin-right: 1em;
          }
          .post-preview-date-front-card:after {
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
        `}
      </style>
    </>
  );
};

export default PostPreview;
