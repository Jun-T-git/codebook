import SignUpForm from "../components/organisms/signUpForm";
import Header from "../components/organisms/header";
import Head from "next/head";

const SignUpPage = () => (
  <>
    <Head>
      <title>Codemap-新規登録</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <SignUpForm />
  </>
);

export default SignUpPage;
