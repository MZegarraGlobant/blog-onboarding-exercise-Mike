import { IImage } from "src/utils/formating";

export interface IPost {
  title: string;
  date: string;
  category: string;
  body: any;
  author: string;
  hero: IImage;
  slug: string;
}

const Post = ({ title, date, category, body, author }: IPost) => {
  return (
    <div>
      {title}
      {date}
      {category}
      {body}
      {author}
    </div>
  );
};

export default Post;
