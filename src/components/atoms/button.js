// ボタンコンポーネント
// onClick クリック時の関数
// className 属性
// children 子要素

const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`${className} font-bold py-2 px-4 rounded`}
  >
    {children}
  </button>
);

export default Button;
