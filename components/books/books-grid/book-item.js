export default function BookItem({ book }) {
  return (
    <div className="bg-red-100">
      <img src={book.imgUrl} alt="book image" />
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}
