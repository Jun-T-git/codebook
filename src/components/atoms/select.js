// セレクトコンポーネント
// onChange 変更時の関数
// options オプション配列
// className 属性

const Select = ({ onChange, options, className }) => (
  <select
    onChange={onChange}
    className={`${className} text-center text-sm md:text-base bg-white border-2 border-gray-200 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
  >
    {options.map((option, index) => (
      <option value={index} key={index}>
        {option.value}
      </option>
    ))}
  </select>
);

export default Select;
