import { Entry } from "contentful";

export interface IImage {
  alt: string;
  url: string;
}

export const contenfulImageFormated = (imageObject: Entry<any>): IImage => {
  return { alt: imageObject?.fields.title, url: imageObject?.fields.file?.url };
};

export const contenfulDateFormated = (date: string): string => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateInDate: Date = new Date(date);
  const formatedDate: string = dateInDate.toLocaleString("en-US", options);
  return formatedDate;
};
