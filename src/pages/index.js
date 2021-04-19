import Link from "next/link";
import Head from "next/head";
import Button from "../components/atoms/button";
import CircleImage from "../components/atoms/circleImage";
import Input from "../components/atoms/input";
import Text from "../components/atoms/Text";
import InputMol from "../components/molecules/inputMol";
import LogInForm from "../components/organisms/logInForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/logIn`}>
        <Button className={"btn-black"} onClick={() => {}}>
          ログイン
        </Button>
      </Link>
      <Button className={"btn-white"} onClick={() => {}}>
        ログインしない
      </Button>
      {/*<CircleImage src={"/images/profile.jpg"} />*/}
      {/*<Input placeHolder={"テスト"} />*/}
      {/*<Text content={"テスト投稿する？Yes, no"} />*/}
      {/*<InputMol text={"名前"} onChange={() => {}} placeHolder={"山田太郎"} />*/}
      {/*<LogInForm />*/}
    </>
  );
}
