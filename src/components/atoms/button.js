// ボタンコンポーネント
// onClick クリック時の関数
// type タイプ
// className 属性
// children 子要素

const Button = ({ onClick, type, className, children }) => (
  <button
    onClick={onClick}
    type={type}
    className={`${className} font-bold py-2 px-4 rounded`}
  >
    {children}
  </button>
);

export default Button;
