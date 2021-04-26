import Card from "../molecules/Card";

// 投稿一覧
// className 属性

const ReviewCards = ({ posts, className }) =>
  posts.map((post, index) => (
    <Card
      key={post.id}
      title={post.data.name}
      image={"/images/profile.jpg"}
      tags={post.data.tags}
      review={post.data.reviewStar}
      level={post.data.levelStar}
    />
  ));

export default ReviewCards;
