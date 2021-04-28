import Input from "../atoms/input";
import Text from "../atoms/Text";
import TextArea from "../atoms/textArea";

// テキストとインプットのセット
// text 内容
// onChange 変更時の関数
// placeHolder 入力のヒント
// type 入力の種類
// value 値
// className 属性

const FormElements = ({
  text,
  onChange,
  placeHolder,
  type,
  value,
  className,
}) => (
  <div className={className}>
    <Text
      content={text}
      className={"block text-gray-700 text-sm md:text-lg font-bold mb-2"}
    />
    {type === "textarea" ? (
      <TextArea
        onChange={onChange}
        placeHolder={placeHolder}
        value={value}
        className={"w-full h-60 text-sm"}
      />
    ) : (
      <Input
        onChange={onChange}
        placeHolder={placeHolder}
        type={type}
        value={value}
        className={"w-full"}
      />
    )}
  </div>
);

export default FormElements;
