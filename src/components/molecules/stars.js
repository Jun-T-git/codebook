import { useState } from "react";
import Star from "../atoms/star";

// スターコンポーネント
// size 星の大きさ
// parent 親コンポーネント（falseの場合編集不可）
// className 属性

const Stars = ({ num = 1, size, setFunc = () => {}, className }) => {
  const [filledNum, setFilledNum] = useState(num);

  return (
    <div className={`${className}`}>
      {Array(5)
        .fill(null)
        .map((value, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setFilledNum(index + 1);
              setFunc(index + 1);
            }}
            className={"focus:outline-none"}
          >
            <Star
              isFilled={index < filledNum ? true : false}
              className={size}
            />
          </button>
        ))}
    </div>
  );
};

export default Stars;
