// インプットコンポーネント
// onChange 変更時の関数
// placeHolder 入力のヒント
// type 入力の種類
// className 属性

const Input = ({ onChange, placeHolder, type, className }) => (
  <input
    onChange={onChange}
    placeholder={placeHolder}
    type={type}
    className={`${className} text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
  />
);

export default Input;
