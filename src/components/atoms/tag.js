// タグコンポーネント
// className 属性
// children 子要素

const Tag = ({ className, isDeletable = false, children }) => (
  <div
    className={`${className} px-2 text-sm md:text-base rounded bg-gray-200 text-gray-700 text-center`}
  >
    {children}
  </div>
);

export default Tag;
