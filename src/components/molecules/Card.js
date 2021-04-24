import Text from "../atoms/Text";
import RectImage from "../atoms/rectImage";
import Tag from "../atoms/tag";

// カード
// title 書籍名
// image 画像のパス
// tags タグ
// review レビュー
// level 難易度
// className 属性

const Card = ({ title, image, tags, review, level, className }) => (
  <>
    <div className={"hidden md:block"}>
      <div
        className={`${className} flex justify-between bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 max-w-4xl mx-auto`}
      >
        <RectImage src={image} />
        <div className={"w-full"}>
          <Text
            content={title}
            className={"px-4 mt-4 mb-2 text-gray-700 text-xl font-bold"}
          />
          <div className={"px-4 flex flex-wrap justify-start"}>
            {tags.map((tag, index) => {
              return (
                <Tag className={"mt-2 mr-2"} key={index}>
                  {tag}
                </Tag>
              );
            })}
          </div>
        </div>
        <div className={"w-28"}>
          <Text content={"　総合：" + review} className={"text-sm"} />
          <Text content={"難易度：" + level} className={"text-sm"} />
        </div>
      </div>
    </div>

    <div className={"md:hidden"}>
      <div
        className={`${className} bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 max-w-4xl mx-auto`}
      >
        <div className={`${className} flex justify-between`}>
          <RectImage src={image} />
          <div className={"w-full"}>
            <Text
              content={title}
              className={"mx-4 mt-4 mb-2 text-gray-700 text-xl font-bold"}
            />
            <div className={"mx-1 flex justify-start space-x-4 "}>
              <Text content={"　総合：" + review} className={"text-sm"} />
              <Text content={"難易度：" + level} className={"text-sm"} />
            </div>
          </div>
        </div>
        <div className={"flex flex-wrap justify-start"}>
          {tags.map((tag, index) => {
            return (
              <Tag className={"mt-2 mr-2"} key={index}>
                {tag}
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
  </>
);

export default Card;
