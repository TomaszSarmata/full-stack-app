import { useState } from "react";

export default function LocationItem({ location }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const pluralLikes = () => {
    if (likes === 1) {
      return "like";
    } else {
      return "likes";
    }
  };

  const pluralDislikes = () => {
    if (dislikes === 1) {
      return "dislike";
    } else {
      return "dislikes";
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="border rounded-lg p-4 text-center">
      <img className="rounded-lg" src={location.img_url} alt="location image" />
      <p className="text-xl font-medium">{location.title}</p>
      <p className="text-gray-700">Visited Date: {location.visitedDate}</p>
      <div className="flex flex-row space-x-3 justify-center">
        <button
          type="button"
          onClick={handleLike}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Like ({likes} {pluralLikes()})
        </button>
        <button
          type="button"
          onClick={handleDislike}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Dislike ({dislikes} {pluralDislikes()})
        </button>
      </div>
    </div>
  );
}
