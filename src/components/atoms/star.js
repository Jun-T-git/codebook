import { useState } from "react";

// スターコンポーネント
// className 属性

const Star = ({ isFilled, className }) => {
  return (
    <div className={`text-yellow-500 ${className}`}>{isFilled ? "★" : "☆"}</div>
  );
};

export default Star;
