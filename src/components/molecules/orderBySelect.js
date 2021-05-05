import Select from "../atoms/select";

// ソート要素
// onChange 変更時の関数
// setOrderBy 入力のヒント
// className 属性

const OrderBySelect = ({ onChange, setOrderBy, className }) => (
  <div className={className}>
    <Select options={} />
  </div>
);

export default OrderBySelect;
