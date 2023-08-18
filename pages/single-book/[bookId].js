import { useRouter } from "next/router";

export default function SingleBook() {
  const router = useRouter();
  const { bookId } = router.query;

  console.log("router", router);
  return <div>{bookId}</div>;
}
