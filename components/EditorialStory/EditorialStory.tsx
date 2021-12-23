import { IPost } from "components/Post/Post";
import PostPreview from "components/PostPreview/PostPreview";

interface IEditoralStory {
  posts: Array<IPost>;
}

const EditoralStory = ({ posts }: IEditoralStory) => {
  const [firstPost, ...columnPosts] = posts;
  return (
    <>
      <div className="editorialStory">
        <PostPreview post={firstPost} variant="front" />
        <div className="columnPosts">
          {columnPosts.map((element, key) => (
            <PostPreview
              post={element}
              variant="column"
              key={`column-${key}-${element.title}`}
            />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .editorialStory {
            display: flex;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin-top: 3em;
          }
          .columnPosts {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 2em;
          }
        `}
      </style>
    </>
  );
};

export default EditoralStory;
