import { IPost } from "components/Post";
import { Entry } from "contentful";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export interface IImage {
  alt: string;
  url: string;
}

export interface IPath {
  params: { slug: string };
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

export const extractPathsFormated = (posts: IPost[]): IPath[] => {
  const paths = posts.map((element) => {
    return { params: { slug: element.slug } };
  });
  return paths;
};

export const formatBody = (body: any) => {
  const options: any = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => `<strong>${text}</strong>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
        `<p>${next(node.content)}</p>`,
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        const assetData = node.data.target.fields;
        switch (assetData.file.contentType) {
          case "image/jpeg":
            return `<img
                src="${assetData.file.url}"
                width="${assetData.file.details.image.width}"
                height="${assetData.file.details.image.height}"
                alt="${assetData.description}"
              />`;
          default:
            return "Nothing to see here...";
        }
      },
    },
  };
  return documentToHtmlString(body, options);
};
