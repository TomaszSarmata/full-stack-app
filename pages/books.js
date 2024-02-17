import BooksGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";
import Content from "@/components/shared/content";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header name="Books Page"></Header>

      <Content>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <BooksGrid></BooksGrid>
        </div>
        <ProgramaticButton pageName="Home" href="/"></ProgramaticButton>
      </Content>

      <Footer buttons={[{ pageName: "Home Page", href: "/" }]}></Footer>
    </div>
  );
}
