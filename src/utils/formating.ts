export const contenfulImageFormated = (imageObject: any): Object => {
  console.log(typeof imageObject);
  return { alt: imageObject?.fields.title, url: imageObject?.fields.file?.url };
};
