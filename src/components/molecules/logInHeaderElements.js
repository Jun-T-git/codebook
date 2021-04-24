import { connect } from "react-redux";
import Link from "next/link";
import CircleImage from "../atoms/circleImage";
import { logOutAction } from "../../store/auth";
import firebase from "../../config/fbConfig";

// 認証状態のヘッダ
// className 属性

const LogInHeaderElements = ({ dispatch, className }) => (
  <div className={`${className} space-x-4 px-4`}>
    <Link href="/logIn">
      <a className="inline-block text-sm md:text-xs px-4 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200">
        投稿する
      </a>
    </Link>
    <Link href="/">
      <a>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            dispatch(logOutAction());
          }}
        >
          <CircleImage src={"/images/profile.jpg"} className={"inline-block"} />
        </button>
      </a>
    </Link>
  </div>
);

export default connect()(LogInHeaderElements);
