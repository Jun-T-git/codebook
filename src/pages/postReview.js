import PostReviewForm from "../components/organisms/postReviewForm";
import Header from "../components/organisms/header";
import Head from "next/head";

const PostReview = () => (
  <>
    <Head>
      <title>Codemap-投稿</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <PostReviewForm />
  </>
);

export default PostReview;
