import Link from "next/link";
import CircleImage from "../atoms/circleImage";

// 認証状態のヘッダ
// className 属性

const LogInHeaderElements = ({ className }) => (
  <div className={`${className} space-x-4 px-4`}>
    <Link href="/logIn">
      <a className="inline-block text-sm px-4 py-2 border rounded text-white border-white hover:text-gray-700 hover:bg-gray-200">
        投稿する
      </a>
    </Link>
    <Link href="/">
      <a>
        <CircleImage src={"/images/profile.jpg"} className={"inline-block"} />
      </a>
    </Link>
  </div>
);

export default LogInHeaderElements;
