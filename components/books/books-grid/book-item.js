export default function BookItem({ book }) {
  return (
    <div className="border rounded-lg p-4">
      <img className="rounded-lg" src={book.imgUrl} alt="book image" />
      <p className="text-xl font-medium">{book.title}</p>
      <p className="text-gray-700">{book.author}</p>
    </div>
  );
}
