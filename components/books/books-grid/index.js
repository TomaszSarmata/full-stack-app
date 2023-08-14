import { useEffect, useState } from "react";
import BookItem from "./book-item";
import books from "./books";

export default function BooksGrid() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await fetch(`/api/books`);
    const data = await res.json();
    setBooks(data);
  };

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {books.map((book) => {
        return <BookItem book={book}></BookItem>;
      })}
    </div>
  );
}
