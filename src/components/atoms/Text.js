// テキストコンポーネント
// content 内容
// className 属性

const Text = ({ content, className }) => (
  <p className={`${className} font-sans`}>{content}</p>
);

export default Text;
