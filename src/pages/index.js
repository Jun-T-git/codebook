import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/organisms/header";
import SearchForm from "../components/organisms/searchForm";
import Card from "../components/molecules/Card";
import ReviewCards from "../components/organisms/reviewCards";
import { db } from "../config/fbConfig";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getReviewPosts();
  }, []);

  const getReviewPosts = async () => {
    var array = posts.slice(0, posts.length);
    await db
      .collection("reviewPosts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const post = { id: doc.id, data: doc.data() };
          array.push(post);
          console.log({ id: doc.id, data: doc.data() });
          console.log(post);
        });
      });
    setPosts(array);
  };

  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchForm title={"書籍を探す"} className={"mb-5"} />
      <ReviewCards posts={posts} />
    </>
  );
}
