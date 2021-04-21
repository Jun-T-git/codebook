// タグコンポーネント
// className 属性
// children 子要素

const Tag = ({ className, children }) => (
  <div
    className={`${className} px-2 rounded bg-gray-200 text-gray-800 text-center`}
  >
    {children}
  </div>
);

export default Tag;
