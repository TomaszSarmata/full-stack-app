import FooterButton from "./footer-button";

export default function Footer({ pageName, href }) {
  return (
    <div className="max-w-max mt-8">
      <FooterButton href={href} title={pageName}></FooterButton>
      {/* <Link href={href}>Go to {pageName}</Link> */}
    </div>
  );
}
