import { connect } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import FormElements from "../molecules/formElements";
import Text from "../atoms/Text";
import Button from "../atoms/button";
import Stars from "../molecules/stars";
import firebase from "../../config/fbConfig";
import { db } from "../../config/fbConfig";
import Tag from "../atoms/tag";
import Input from "../atoms/input";

// レビュー投稿フォーム
// className 属性

const PostReviewForm = ({ className }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [reviewStar, setReviewStar] = useState(1);
  const [levelStar, setLevelStar] = useState(1);
  const [content, setContent] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeTagInput = (e) => {
    setNewTag(e.target.value);
  };

  const addTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // データ追加
    db.collection("reviewPosts")
      .add({
        name: name,
        author: author,
        title: title,
        reviewStar: reviewStar,
        levelStar: levelStar,
        tags: tags,
        content: content,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        router.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <form
      className={`${className} bg-white shadow-md rounded px-4 md:px-14 pt-6 pb-8 mb-4 max-w-4xl mx-auto`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Text
        content={"書籍レビューを投稿する"}
        className={"text-center text-2xl font-bold mt-2"}
      />
      <FormElements
        text={"書籍名"}
        placeHolder={
          "例：ゼロから作るDeep Learning 〜Pythonで学ぶディープラーニングの理論と実装〜"
        }
        className={"my-7"}
        onChange={(e) => {
          handleChangeName(e);
        }}
      />
      <FormElements
        text={"著者"}
        placeHolder={"例：斎藤 康毅"}
        className={"my-7"}
        onChange={(e) => {
          handleChangeAuthor(e);
        }}
      />
      <FormElements
        text={"レビュータイトル"}
        placeHolder={"例：最高のディープラーニング入門書！"}
        className={"my-7"}
        onChange={(e) => {
          handleChangeTitle(e);
        }}
      />
      <div className={"grid grid-cols-2 justify-items-start mb-5"}>
        <div>
          <Text content={"総合評価"} className={"text-lg font-bold"} />
          <Stars size={"text-2xl md:text-3xl"} setFunc={setReviewStar} />
        </div>
        <div>
          <Text content={"難易度"} className={"text-lg font-bold"} />
          <Stars size={"text-2xl md:text-3xl"} setFunc={setLevelStar} />
        </div>
      </div>
      <div>
        <Text content={"タグ"} className={"text-lg font-bold"} />
        <div className={"flex flex-wrap justify-start"}>
          {tags.map((tag, index) => {
            return (
              <Tag className={"my-2 mr-2"} key={index}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <div className={"flex justify-between"}>
          <Input
            onChange={(e) => {
              handleChangeTagInput(e);
            }}
            placeHolder={
              "追加したいタグ（例：初心者向け，Python，サンプルコードあり，など）"
            }
            value={newTag}
            className={"w-full"}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              addTag(newTag);
              setNewTag("");
            }}
            className={"btn-black"}
          >
            +
          </Button>
        </div>
      </div>
      <FormElements
        text={"レビュー詳細"}
        placeHolder={
          "例：ディープラーニングの基礎が分かりやすくまとまった一冊です．Pythonで機械学習ライブラリを用いずにディープラーニングを実装していくので，手を動かしながら学ぶことができます．"
        }
        type={"textarea"}
        className={"my-7"}
        onChange={(e) => {
          handleChangeContent(e);
        }}
      />
      <Button type={"submit"} className={"w-full btn-black mt-5 mb-2"}>
        投稿する
      </Button>
    </form>
  );
};

export default PostReviewForm;
