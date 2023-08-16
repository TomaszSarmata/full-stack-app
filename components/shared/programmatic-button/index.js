import { useRouter } from "next/router";

export default function ProgramaticButton({ href, pageName }) {
  const router = useRouter();
  const handleClick = () => {
    alert(
      `You will now be navigated to the ${pageName} Page. Press OK to proceed`
    );
    router.push(`${href}`);
  };
  return (
    <div className="w-full max-w-6xl mx-auto">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-1 px-3 rounded-md mt-5"
      >
        Click me!<br></br>
        <span className="text-xs text-gray-200">programatic navigation</span>
      </button>
    </div>
  );
}
