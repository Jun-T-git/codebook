import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/organisms/header";
import SearchForm from "../components/organisms/searchForm";
import ReviewCards from "../components/organisms/reviewCards";
import Select from "../components/atoms/select";
import { db } from "../config/fbConfig";

export default function Home() {
  const selectOptions = [
    { key: "createdAt", value: "投稿が新しい順", isDesc: true },
    { key: "reviewStar", value: "評価が高い順", isDesc: true },
    { key: "levelStar", value: "難易度が低い順", isDesc: false },
  ];
  const [posts, setPosts] = useState([]);
  const [orderedBy, setOrderedBy] = useState(selectOptions[0]);

  useEffect(() => {
    getReviewPosts();
  }, [orderedBy]);

  const getReviewPosts = async () => {
    var array = [];
    const dir = orderedBy.isDesc ? "desc" : "asc";
    console.log(orderedBy);
    await db
      .collection("reviewPosts")
      .orderBy(orderedBy.key, dir)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const post = { id: doc.id, data: doc.data() };
          array.push(post);
        });
      });
    setPosts(array);
  };

  const handleChangeSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setOrderedBy(selectOptions[e.target.value]);
  };

  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchForm title={"書籍を探す"} className={""} />
      <div className={"my-5 max-w-4xl mx-auto"}>
        <Select
          options={selectOptions}
          onChange={(e) => handleChangeSelect(e)}
        />
      </div>
      <ReviewCards posts={posts} />
    </>
  );
}
