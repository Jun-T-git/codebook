import Input from "../atoms/input";
import Text from "../atoms/Text";
import Button from "../atoms/button";
import { useState, useRef } from "react";

// 検索フォーム
// className 属性

const SearchForm = ({ title, search, reset, className }) => {
  const inputRef = useRef();

  const handleClickSearch = (e) => {
    e.preventDefault();
    search(inputRef.current.value);
  };

  const handleClickReset = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    reset();
  };

  return (
    <div
      className={`${className} bg-white shadow-md rounded px-4 md:px-14 pt-6 pb-8 max-w-5xl mx-auto text-center`}
    >
      <Text content={title} className={"text-left text-2xl font-bold my-2"} />
      <hr className={"bg-gray-300 border-0 h-0.5 mb-5"} />
      <Input
        inputRef={inputRef}
        type={"search"}
        placeHolder={"書籍名・キーワード等を入力"}
        className={"w-full"}
      />
      <div className={"flex space-x-10"}>
        <Button
          onClick={(e) => {
            handleClickReset(e);
          }}
          className={"w-full btn-white mt-5 mb-2"}
        >
          リセット
        </Button>
        <Button
          onClick={(e) => {
            handleClickSearch(e);
          }}
          className={"w-full btn-black mt-5 mb-2"}
        >
          検索
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
