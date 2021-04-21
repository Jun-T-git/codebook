import Input from "../atoms/input";
import Text from "../atoms/Text";

// テキストとインプットのセット
// text 内容
// onChange 変更時の関数
// placeHolder 入力のヒント
// type 入力の種類
// className 属性

const FormElements = ({ text, onChange, placeHolder, type, className }) => (
  <div className={className}>
    <Text
      content={text}
      className={"block text-gray-700 text-sm font-bold mb-2"}
    />
    <Input
      onChange={onChange}
      placeHolder={placeHolder}
      type={type}
      className={"w-full"}
    />
  </div>
);

export default FormElements;
