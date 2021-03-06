import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import FormElements from "../molecules/formElements";
import Text from "../atoms/Text";
import Button from "../atoms/button";
import { logInAction } from "../../store/auth";
import firebase from "../../config/fbConfig";

// 新規登録フォーム
// className 属性

const SignUpForm = ({ dispatch, className }) => {
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEMail = (e) => {
    setEMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //新規登録処理
    firebase
      .auth()
      .createUserWithEmailAndPassword(eMail, password)
      .then((res) => {
        //正常終了時
        dispatch(logInAction());
        router.push("/");
      })
      .catch((error) => {
        //異常終了時
        alert(error);
      });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${className} bg-white shadow-md rounded px-4 md:px-14 pt-6 pb-8 mb-4 max-w-md mx-auto`}
    >
      <Text
        content={"アカウント新規登録"}
        className={"text-center text-2xl font-bold mt-2"}
      />
      <FormElements
        text={"ユーザ名"}
        value={name}
        onChange={(e) => {
          handleChangeName(e);
        }}
        placeHolder={"テスト太郎"}
        className={"my-7"}
      />
      <FormElements
        text={"メールアドレス（ID）"}
        value={eMail}
        onChange={(e) => {
          handleChangeEMail(e);
        }}
        placeHolder={"test@gmail.com"}
        className={"my-7"}
      />
      <FormElements
        text={"パスワード"}
        value={password}
        onChange={(e) => {
          handleChangePassword(e);
        }}
        placeHolder={"********"}
        type={"password"}
        className={"my-7"}
      />
      <FormElements
        text={"確認のため再度パスワードを入力してください"}
        onChange={() => {}}
        placeHolder={"********"}
        type={"password"}
        className={"my-7"}
      />
      <Button type={"submit"} className={"w-full btn-black mt-5 mb-2"}>
        ログイン
      </Button>
    </form>
  );
};

export default connect()(SignUpForm);
