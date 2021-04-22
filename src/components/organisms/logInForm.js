import { connect } from "react-redux";
import Link from "next/link";
import FormElements from "../molecules/formElements";
import Text from "../atoms/Text";
import Button from "../atoms/button";
import { logIn } from "../../store/auth";

// ログインフォーム
// className 属性

const LogInForm = ({ dispatch, className }) => (
  <div
    className={`${className} bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 max-w-md mx-auto`}
  >
    <Text
      content={"Codemapにログイン"}
      className={"text-center text-2xl font-bold mt-2"}
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
    <Link href={"/"}>
      <a>
        <Button
          onClick={() => {
            dispatch(logIn());
          }}
          className={"w-full btn-black mt-5 mb-2"}
        >
          ログイン
        </Button>
      </a>
    </Link>
  </div>
);

export default connect()(LogInForm);
