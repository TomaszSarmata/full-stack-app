import FooterButton from "./footer-button";

export default function Footer({ buttons }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 flex flex-row space-x-2 px-4">
      {buttons.map((button, index) => (
        <FooterButton
          key={button.index}
          pageName={button.pageName}
          href={button.href}
        ></FooterButton>
      ))}
    </div>
  );
}
