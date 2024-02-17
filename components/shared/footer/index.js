import FooterButton from "./footer-button";

export default function Footer({ buttons = [], children }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 flex flex-row space-x-2 px-4">
      {children}
      {buttons.map((button, index) => (
        <FooterButton
          key={index}
          pageName={button.pageName}
          href={button.href}
        ></FooterButton>
      ))}
    </div>
  );
}
