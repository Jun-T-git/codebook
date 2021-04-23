import { connect } from "react-redux";
import { useRouter } from "next/router";
import FormElements from "../molecules/formElements";
import Text from "../atoms/Text";
import Button from "../atoms/button";
import { logIn } from "../../store/auth";

// 新規登録フォーム
// className 属性

const SignUpForm = ({ dispatch, className }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn());
    router.push("/");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${className} bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 max-w-md mx-auto`}
    >
      <Text
        content={"アカウント新規登録"}
        className={"text-center text-2xl font-bold mt-2"}
      />
      <FormElements
        text={"ユーザ名"}
        onChange={() => {}}
        placeHolder={"テスト太郎"}
        className={"my-7"}
      />
      <FormElements
        text={"ID"}
        onChange={() => {}}
        placeHolder={"@testId_123"}
        className={"my-7"}
      />
      <FormElements
        text={"パスワード"}
        onChange={() => {}}
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
