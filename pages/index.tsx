import type { NextPage } from "next";
import Head from "next/head";
import BlogSection from "components/BlogSection";
import { fetchPosts } from "@services/contentful";
import { IPost } from "../components/Post";
import { BlogSectionVariants } from "src/utils/contentfulEnums";

interface IHomeProps {
  posts: IPost[];
}

export async function getServerSideProps() {
  let items;
  items = await fetchPosts();
  return { props: { posts: items || null } };
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Contentful blog by Mike</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <BlogSection variant={BlogSectionVariants.editorialStory} posts={posts} />
      <BlogSection
        title="MOST POPULAR"
        variant={BlogSectionVariants.mostPopular}
        posts={posts}
      />
      <BlogSection
        title="BROWSE ALL"
        variant={BlogSectionVariants.browseAll}
        posts={posts}
        categoryFilter
      />
    </div>
  );
};

export default Home;
