import { Entry } from "contentful";

export interface IImage {
  alt: string;
  url: string;
}

export const contenfulImageFormated = (imageObject: Entry<any>): IImage => {
  return { alt: imageObject?.fields.title, url: imageObject?.fields.file?.url };
};
