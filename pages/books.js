import BooksGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header name="Books Page"></Header>
      <div className="w-full max-w-6xl mx-auto mt-8">
        <BooksGrid></BooksGrid>
      </div>
      <ProgramaticButton pageName="Home" href="/"></ProgramaticButton>
      <Footer href="/" pageName="Home Page"></Footer>
    </div>
  );
}
