import { useState, useEffect } from "react";

export interface IPost {
  title: string;
  date: Date;
  category: string;
  body: string;
}

const Post = ({ title, date, category, body }: IPost) => {
  return (
    <div>
      {title}
      {date}
      {category}
      {body}
    </div>
  );
};

export default Post;
