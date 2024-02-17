import Link from "next/link";

export default function FooterButton({ title, href }) {
  return (
    <Link
      title={title}
      href={href}
      type="button"
      className="w-full bg-blue-500 text-white text-sm text-center px-3 py-2 rounded-md"
    >
      {title}
    </Link>
  );
}
