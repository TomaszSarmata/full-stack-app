import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleBook() {
  const [singleBook, setSingleBook] = useState(null);
  const router = useRouter();
  const { bookId } = router.query;

  useEffect(() => {
    if (!bookId) return;
    getSingleBook(bookId);
  }, [bookId]);

  const getSingleBook = async (id) => {
    const res = await fetch(`/api/book-by-id?id=${id}`);
    const data = await res.json();
    const { book } = data;
    setSingleBook(book);
  };

  console.log(singleBook);

  if (!singleBook) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <img className="h-44" src={singleBook.imgUrl} alt="" />
      <p>{singleBook.title}</p>
      <p>{singleBook.author}</p>
    </div>
  );
}
