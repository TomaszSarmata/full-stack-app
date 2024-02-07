import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";

export default function Contact() {
  return (
    <div className="w-full">
      <Header name="Contact"></Header>

      <Content>
        <div>Content</div>
      </Content>

      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
