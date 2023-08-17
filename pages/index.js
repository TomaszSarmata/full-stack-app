import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";
import Content from "@/components/shared/content";

export default function Home() {
  return (
    <div className="w-full">
      <Header name="Home Page"></Header>

      <Content>
        <ProgramaticButton pageName="Books" href="/books"></ProgramaticButton>
      </Content>

      <Footer href="/books" pageName="Books Page"></Footer>
    </div>
  );
}
