import NumberOfLikes from "./number-of-likes";
import { useLikes } from "@/context/likes";

export default function LikeButton({ location }) {
  const { handleLike, likesByLocation } = useLikes();
  const likes = likesByLocation[location.id] || 0;

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
      onClick={() => {
        handleLike(location.id);
      }}
      className="bg-blue-500 text-white px-3 py-1 rounded-md"
    >
      Like (<NumberOfLikes locationId={location.id}></NumberOfLikes>{" "}
      {pluralLikes()})
    </button>
  );
}
