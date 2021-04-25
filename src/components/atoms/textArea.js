// テキストエリアコンポーネント
// onChange 変更時の関数
// placeHolder 入力のヒント
// className 属性

const TextArea = ({ onChange, placeHolder, className }) => (
  <textarea
    onChange={onChange}
    placeholder={placeHolder}
    className={`${className} bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
  />
);

export default TextArea;
