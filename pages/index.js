import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    alert("You will now be navigated to the Books Page. Press OK to proceed");
    router.push("./books");
  };
  return (
    <div>
      <div className="text-5xl bg-red-500">Hello!</div>
      <Link href="./books">Go to Books page</Link>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-1 px-3 rounded-md"
        >
          Click me!
        </button>
      </div>
    </div>
  );
}
