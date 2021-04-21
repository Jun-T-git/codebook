import Input from "../atoms/input";
import Text from "../atoms/Text";
import Button from "../atoms/button";

// 検索フォーム
// className 属性

const SearchForm = ({ title, className }) => (
  <div
    className={`${className} bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 max-w-4xl mx-auto text-center`}
  >
    <Text content={title} className={"text-left text-2xl font-bold my-2"} />
    <hr className={"bg-gray-300 border-0 h-0.5 mb-5"} />
    <Input
      type={"search"}
      placeHolder={"書籍名・キーワード等を入力"}
      className={"w-full"}
    />
    <div className={"flex space-x-10"}>
      <Button onClick={() => {}} className={"w-full btn-white mt-5 mb-2"}>
        リセット
      </Button>
      <Button onClick={() => {}} className={"w-full btn-black mt-5 mb-2"}>
        検索
      </Button>
    </div>
  </div>
);

export default SearchForm;
