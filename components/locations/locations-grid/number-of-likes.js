import { useLikes } from "@/context/likes";

export default function NumberOfLikes({ locationId }) {
  const { likesByLocation } = useLikes();
  const likes = likesByLocation[locationId] || 0;
  return <span>{likes}</span>;
}
