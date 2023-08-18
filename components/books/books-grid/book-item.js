import { useState } from "react";

export default function BookItem({ book }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const numberOfLikes = () => {
    if (likes === 1) {
      return "like";
    } else {
      return "likes";
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
      <img className="rounded-lg" src={book.imgUrl} alt="book image" />
      <p className="text-xl font-medium">{book.title}</p>
      <p className="text-gray-700">{book.author}</p>
      <div className="flex flex-row space-x-3 justify-center">
        <button
          type="button"
          onClick={handleLike}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Like ({likes} {numberOfLikes()})
        </button>
        <button
          type="button"
          onClick={handleDislike}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Dislike ({dislikes} dislikes)
        </button>
      </div>
    </div>
  );
}
