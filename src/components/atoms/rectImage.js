// 円形画像コンポーネント
// src 画像パス
// className 属性

const RectImage = ({ src, className }) => (
  <img src={src} className={`${className} w-20 h-20 object-cover`} alt="item" />
);

export default RectImage;
