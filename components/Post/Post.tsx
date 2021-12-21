export interface IPost {
  title: string;
  date: Date;
  category: string;
  body: string;
  author: string;
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
