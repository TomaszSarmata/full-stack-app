import { useEffect, useState } from "react";
import BookItem from "./book-item";

export default function BooksGrid() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/books`);
    const data = await res.json();
    setBooks(data);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading books...</div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-4 mb-8">
          {books.map((book, index) => {
            return <BookItem book={book} key={index}></BookItem>;
          })}
        </div>
      )}
    </div>
  );
}
