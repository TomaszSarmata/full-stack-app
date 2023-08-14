import Link from "next/link";
import BooksGrid from "@/components/books/books-grid";

export default function BooksPage() {
  return (
    <div className="bg-green-500">
      <BooksGrid></BooksGrid>
      <div>Books Page</div>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
