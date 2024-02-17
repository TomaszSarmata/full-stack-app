import Link from "next/link";

export default function FooterButton({ pageName, href }) {
  return (
    <Link
      pageName={pageName}
      href={href}
      type="button"
      className="bg-blue-500 text-white text-sm text-center px-3 py-2 rounded-md"
    >
      {pageName}
    </Link>
  );
}
