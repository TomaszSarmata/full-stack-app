import Link from "next/link";

export default function FooterButton({ title, href }) {
  return (
    <Link
      title={title}
      href={href}
      type="button"
      className="bg-blue-500 text-white px-3 py-2 rounded-md"
    >
      {title}
    </Link>
  );
}
