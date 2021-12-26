import { IImage } from "src/utils/formating";

export interface IPost {
  title: string;
  date: string;
  category: string;
  body: string;
  author: string;
  hero: IImage;
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
