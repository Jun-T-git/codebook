import Text from "../atoms/Text";

// ヘッダ
// isLogIn ログインしているか
// className 属性

const Header = ({ isLogIn, className }) => (
  <nav className={`${className} bg-gray-700 py-3 px-5 flex justify-between`}>
    <Text content={"Codemap"} className={"text-3xl font-bold text-white"} />
    <div>
      <a
        href="/logIn"
        className="inline-block text-sm px-4 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200 mx-2"
      >
        ログイン
      </a>
      <a
        href="/logIn"
        className="inline-block text-sm px-4 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200 mx-2"
      >
        新規登録
      </a>
    </div>
  </nav>
);

export default Header;
