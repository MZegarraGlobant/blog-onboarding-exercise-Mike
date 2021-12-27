import { IPost } from "components/Post";
import { Entry } from "contentful";

export interface IImage {
  alt: string;
  url: string;
}

export const contenfulImageFormated = (imageObject: Entry<any>): IImage => {
  return { alt: imageObject?.fields.title, url: imageObject?.fields.file?.url };
};

export const contenfulDateFormated = (date: string): string => {
  const dateInDate: Date = new Date(date);
  const formatedDate: string = dateInDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatedDate;
};

export const extractCategoriesFormated = (posts: IPost[]): string[] => {
  const avaibleCategories = posts.map((element) => element.category);
  const categoriesFormated = avaibleCategories.filter((element, index) => {
    return avaibleCategories.indexOf(element) === index;
  });
  return categoriesFormated;
};
