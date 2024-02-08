import NumberOfLikes from "./number-of-likes";
import { useLikes } from "@/context/likes";

export default function LikeButton() {
  const { likes, handleLike } = useLikes();

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
      onClick={handleLike}
      className="bg-blue-500 text-white px-3 py-1 rounded-md"
    >
      Like <NumberOfLikes></NumberOfLikes> {pluralLikes()}
    </button>
  );
}
