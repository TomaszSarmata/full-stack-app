import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";
import Topics from "@/components/home/hero/topics";

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
        <Topics></Topics>
        <ProgramaticButton pageName="Books" href="/books"></ProgramaticButton>
      </Content>
      <div className="flex flex-wrap">
        <Footer
          href="/books"
          pageName="Books Page"
          buttons={[
            { pageName: "Locations Page", href: "/locations" },
            { pageName: "Books Page", href: "/books" },
            { pageName: "Contact Page", href: "/contact" },
            { pageName: "Search Page", href: "/search" },
          ]}
        ></Footer>
      </div>
    </div>
  );
}
