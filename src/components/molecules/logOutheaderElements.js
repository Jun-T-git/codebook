import Link from "next/link";

// 未認証状態のヘッダ
// className 属性

const LogOutHeaderElements = ({ className }) => (
  <div className={`${className} space-x-3`}>
    <Link href="/logIn">
      <a className="inline-block text-sm px-3 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200">
        ログイン
      </a>
    </Link>
    <Link href="/signUp">
      <a className="inline-block text-sm px-3 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200">
        新規登録
      </a>
    </Link>
  </div>
);

export default LogOutHeaderElements;
