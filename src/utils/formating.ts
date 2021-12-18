export const contenfulImageFormated = (imageObject: any): Object => {
  return { alt: imageObject?.fields.title, url: imageObject?.fields.file?.url };
};
