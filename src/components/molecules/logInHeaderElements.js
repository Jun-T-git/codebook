import { connect } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CircleImage from "../atoms/circleImage";
import { logOutAction } from "../../store/auth";
import firebase from "../../config/fbConfig";

// 認証状態のヘッダ
// className 属性

const LogInHeaderElements = ({ dispatch, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const logOut = async () => {
    await firebase.auth().signOut();
    dispatch(logOutAction());
    router.push("/");
  };

  return (
    <div className={`${className} space-x-4 px-4`}>
      <Link href="/postReview">
        <a className="inline-block text-xs md:text-sm px-4 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200">
          投稿する
        </a>
      </Link>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <CircleImage src={"/images/profile.jpg"} className={"inline-block"} />
      </button>
      <div className={isMenuOpen ? "fixed" : "hidden"}>
        <ul className={"bg-gray-700 my-2 text-xs text-white rounded"}>
          <li>
            <button
              className={"px-10 py-3 hover:bg-gray-500"}
              onClick={() => {
                logOut();
              }}
            >
              ログアウト
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default connect()(LogInHeaderElements);
