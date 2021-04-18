// 円形画像コンポーネント
// src 画像パス
// className 属性

const CircleImage = ({ src, className }) => (
  <img
    src={src}
    className={`${className} w-10 h-10 object-cover rounded-full`}
    alt="avatar"
  />
);

export default CircleImage;
