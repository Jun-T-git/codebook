import Link from "next/link";
import Head from "next/head";
import Header from "../components/organisms/header";
import SearchForm from "../components/organisms/searchForm";
import Card from "../components/molecules/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchForm title={"書籍を探す"} className={"mb-5"} />
      <Card
        title={"書籍タイトル"}
        image={"/images/profile.jpg"}
        tags={["tag1", "tag2", "tag3"]}
        review={"4.1"}
        level={"3.5"}
      />
      <Card
        title={"書籍タイトル"}
        image={"/images/profile.jpg"}
        tags={["tag1", "tag2", "tag3"]}
        review={"4.1"}
        level={"3.5"}
      />
      <Card
        title={"書籍タイトル"}
        image={"/images/profile.jpg"}
        tags={["tag1", "tagtagtagtagtagtagtagtagtagtagtagtagtagtag", "tag3"]}
        review={"4.1"}
        level={"3.5"}
      />
      <Card
        title={"書籍タイトル"}
        image={"/images/profile.jpg"}
        tags={[
          "tag1",
          "tag2",
          "tag3",
          "tag1",
          "tag2",
          "tag3",
          "tag1",
          "tag2",
          "tag3",
        ]}
        review={"4.1"}
        level={"3.5"}
      />
    </>
  );
}
