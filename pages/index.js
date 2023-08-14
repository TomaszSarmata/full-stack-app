import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-5xl bg-red-500">Hello!</div>
      <Link href="./books">Go to Books page</Link>
    </div>
  );
}
