import LogInForm from "../components/organisms/logInForm";
import Header from "../components/organisms/header";
import Head from "next/head";

const LogInPage = () => (
  <>
    <Head>
      <title>Codemap-ログイン</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <LogInForm />
  </>
);

export default LogInPage;
