import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";
import Topics from "@/components/home/hero/topics";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    localStorage.setItem("password", "sensitive data");
    const info = localStorage.getItem("password");
    setData(info);
  });
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
          buttons={[
            { pageName: "Locations Page", href: "/locations" },
            { pageName: "Books Page", href: "/books" },
            { pageName: "Contact Page", href: "/contact" },
            { pageName: "Search Page", href: "/search" },
          ]}
        >
          {/* <Link
            href="/"
            type="button"
            className="bg-yellow-500 text-white text-sm text-center px-3 py-2 rounded-md"
          >
            Home
          </Link> */}
        </Footer>
      </div>
    </div>
  );
}
