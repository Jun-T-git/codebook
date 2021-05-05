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
  const [initialPosts, setInitialPosts] = useState([]);
  const [orderedBy, setOrderedBy] = useState(selectOptions[0]);

  useEffect(() => {
    getReviewPosts();
  }, []);

  useEffect(() => {
    setPosts(getViewPosts(initialPosts));
  }, [initialPosts]);

  const search = (str) => {
    let viewPosts = [];
    for (let i = 0; i < initialPosts.length; i++) {
      if (initialPosts[i].data.name.indexOf(str) != -1) {
        viewPosts.push(initialPosts[i]);
      } else {
        for (let j = 0; j < initialPosts[i].data.tags.length; j++) {
          if (initialPosts[i].data.tags[j].indexOf(str) != -1) {
            viewPosts.push(initialPosts[i]);
            break;
          }
        }
      }
    }
    setPosts(getViewPosts(viewPosts));
  };

  const reset = () => {
    setPosts(getViewPosts(initialPosts));
  };

  const getReviewPosts = async () => {
    let array = [];
    const dir = orderedBy.isDesc ? "desc" : "asc";
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
    setInitialPosts(array);
  };

  const sortPosts = (orderedBy) => {
    let sortedPosts = posts.slice(0, posts.length);
    sortedPosts.sort(function (before, after) {
      if (orderedBy.isDesc) {
        if (before.data[orderedBy.key] > after.data[orderedBy.key]) {
          return -1;
        } else if (before.data[orderedBy.key] < after.data[orderedBy.key]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (before.data[orderedBy.key] > after.data[orderedBy.key]) {
          return 1;
        } else if (before.data[orderedBy.key] < after.data[orderedBy.key]) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    setPosts(sortedPosts);
  };

  const getViewPosts = (postList) => {
    let viewPosts = postList.slice(0, postList.length);
    for (let i = 0; i < viewPosts.length; i++) {
      let len = 0;
      let endIndex = 0;
      for (let j = 0; j < viewPosts[i].data.name.length; j++) {
        viewPosts[i].data.name[j].match(/[ -~]/) ? (len += 1) : (len += 2);
        if (len < 60) {
          endIndex++;
        }
      }
      if (len > 61) {
        viewPosts[i].data.name =
          viewPosts[i].data.name.slice(0, endIndex) + "...";
      }
    }
    return viewPosts;
  };

  const handleChangeSelect = (e) => {
    e.preventDefault();
    setOrderedBy(selectOptions[e.target.value]);
    sortPosts(selectOptions[e.target.value]);
  };

  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchForm
        title={"書籍を探す"}
        search={search}
        reset={reset}
        className={""}
      />
      <div className={"my-5 max-w-5xl mx-auto text-right"}>
        <Select
          options={selectOptions}
          onChange={(e) => handleChangeSelect(e)}
        />
      </div>
      <ReviewCards posts={posts} />
    </>
  );
}
