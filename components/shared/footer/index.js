import Link from "next/link";

export default function Footer({ pageName, href }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 block bg-red-100">
      <Link href={href}>Go to {pageName}</Link>
    </div>
  );
}
