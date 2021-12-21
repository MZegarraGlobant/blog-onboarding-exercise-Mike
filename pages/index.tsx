import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import BlogSection from "components/BlogSection/BlogSection";
import { getPosts } from "@services/contentful";
import { IPost } from "../components/Post/Post";

interface IHomeProps {
  posts: IPost[];
}

export async function getServerSideProps() {
  let items;
  items = await getPosts();
  return { props: { posts: items || null } };
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contentful blog by Mike</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <BlogSection variant="featured" posts={posts} />
      <BlogSection title="MOST POPULAR" variant="grid" posts={posts} />
      <BlogSection title="BROWSE ALL" variant="grid" posts={posts} />
      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
