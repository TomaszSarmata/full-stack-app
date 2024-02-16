import Link from "next/link";
import FooterButton from "./footer-button";

export default function Footer({ pageName, href }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <FooterButton href={href} title={pageName}></FooterButton>
      {/* <Link href={href}>Go to {pageName}</Link> */}
    </div>
  );
}
