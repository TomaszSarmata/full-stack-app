import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProgramaticButton from "@/components/shared/programmatic-button";

export default function Home() {
  return (
    <div className="w-full">
      <Header name="Home Page"></Header>

      <ProgramaticButton pageName="Books" href="/books"></ProgramaticButton>

      <Footer href="/books" pageName="Books"></Footer>
    </div>
  );
}
