import { connect } from "react-redux";
import Text from "../atoms/Text";
import Link from "next/link";
import LogOutHeaderElements from "../molecules/logOutHeaderElements";
import LogInHeaderElements from "../molecules/logInHeaderElements";

// ヘッダ
// isLogIn ログインしているか
// className 属性

const Header = ({ isLogIn, className }) => (
  <div className={`${className} bg-gray-700 mb-5`}>
    <nav className={`px-2 py-2 flex justify-between items-center`}>
      <div className={"flex justify-between items-center"}>
        <Link href="/">
          <a>
            <Text
              content={"Codemap"}
              className={
                "inline-block px-3 py-2 text-2xl md:text-3xl font-bold text-white"
              }
            />
          </a>
        </Link>
        <div className={"hidden md:flex"}>
          <Link href="/">
            <a>
              <Text
                content={"書籍を探す"}
                className={
                  "inline-block text-sm px-6 py-1 text-gray-200 hover:text-gray-400"
                }
              />
            </a>
          </Link>
          <Link href="/roadMap">
            <a>
              <Text
                content={"ロードマップを探す"}
                className={
                  "inline-block text-sm px-6 py-1 text-gray-200 hover:text-gray-400"
                }
              />
            </a>
          </Link>
        </div>
      </div>
      {isLogIn ? <LogInHeaderElements /> : <LogOutHeaderElements />}
    </nav>
    <div className={"md:hidden"}>
      <Link href="/">
        <a>
          <Text
            content={"書籍を探す"}
            className={
              "inline-block text-sm text-center w-1/2 py-2 text-gray-200 hover:text-gray-400"
            }
          />
        </a>
      </Link>
      <Link href="/postReview">
        <a>
          <Text
            content={"ロードマップを探す"}
            className={
              "inline-block text-sm text-center w-1/2 py-2 text-gray-200 hover:text-gray-400"
            }
          />
        </a>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    isLogIn: state.isLogIn,
  };
};

export default connect(mapStateToProps)(Header);
