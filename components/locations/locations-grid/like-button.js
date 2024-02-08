import NumberOfLikes from "./number-of-likes";

export default function LikeButton({ previouslyhandleLike, likes }) {
  // const handleLike = () => {
  //   setLikes(likes + 1);
  // };
  const pluralLikes = () => {
    if (likes === 1) {
      return "like";
    } else {
      return "likes";
    }
  };
  return (
    <button
      type="button"
      onClick={previouslyhandleLike}
      className="bg-blue-500 text-white px-3 py-1 rounded-md"
    >
      Like <NumberOfLikes likes={likes}></NumberOfLikes> {pluralLikes()}
    </button>
  );
}
