import { useState } from "react";
import Link from "next/link";

export default function BookItem({ book }) {
  const [likes, setLikes] = useState(+book.likes);
  const [dislikes, setDislikes] = useState(+book.dislikes);

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

  const handleLike = async () => {
    let newLikes = likes + 1;
    setLikes(newLikes);
    const id = +book.id;
    const response = await fetch(
      `/api/increase-likes?id=${id}&likes=${newLikes}`
    );
    const data = await response.json();
  };

  const handleDislike = async () => {
    let newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    const id = +book.id;
    const response = await fetch(
      `/api/increase-dislikes?id=${id}&dislikes=${newDislikes}`
    );
    const data = await response.json();
  };

  return (
    <div className=" rounded-lg p-4 text-center shadow-xl shadow-[#0000001A]">
      <Link href={`/single-book/${book.id}`} className="text-xl font-medium">
        <img className="rounded-lg" src={book.img_url} alt="book image" />
      </Link>

      <p className="text-xl font-medium">{book.title}</p>
      <p className="text-gray-700">{book.author}</p>
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
