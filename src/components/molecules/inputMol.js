import Input from "../atoms/input";
import Text from "../atoms/Text";

// テキストとインプットのセット
// text 内容
// onChange 変更時の関数
// placeHolder 入力のヒント
// className 属性

const InputMol = ({ text, onChange, placeHolder, className }) => (
  <div className={className}>
    <Text
      content={text}
      className={"block text-gray-700 text-sm font-bold mb-2"}
    />
    <Input onChange={onChange} placeHolder={placeHolder} className={"w-full"} />
  </div>
);

export default InputMol;
