import { useState, ChangeEvent, ChangeEventHandler } from "react";

interface IPostPreviewFilter {
  options: string[];
}

const PostPreviewFilter = ({ options }: IPostPreviewFilter) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="select-category"
      >
        <option value="all">All</option>
        {options.length > 0 &&
          options.map((category: string) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
      </select>
      <style jsx>
        {`
          .select-category {
            display: flex;
            width: 15em;
            height: 3em;
          }
        `}
      </style>
    </>
  );
};

export default PostPreviewFilter;
