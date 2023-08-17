import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div className="w-full">
      <Header name="Home Page"></Header>

      <Hero
        imgUrl="/images/profile.png"
        title="Tomasz"
        subtitle="I am a bootcamp student"
      ></Hero>

      <Content>
        <ProgramaticButton pageName="Books" href="/books"></ProgramaticButton>
      </Content>

      <Footer href="/books" pageName="Books Page"></Footer>
    </div>
  );
}
