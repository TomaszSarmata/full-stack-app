import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
export default function Search() {
  return (
    <div className="w-full">
      <Header name="Search Page"></Header>
      <Content>Content</Content>
      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
