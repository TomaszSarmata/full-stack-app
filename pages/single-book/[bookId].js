import Header from "@/components/shared/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SingleBook() {
  const [singleBook, setSingleBook] = useState(null);
  const router = useRouter();
  const { bookId } = router.query;

  useEffect(() => {
    if (!bookId) return;
    getSingleBook(bookId);
  }, [bookId]);

  const getSingleBook = async (id) => {
    const res = await fetch(`/api/book-by-id?id=${id}`);
    const data = await res.json();
    const { book } = data;
    setSingleBook(book);
  };

  console.log(singleBook);

  if (!singleBook) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full">
      <Header name="Book Details Page"></Header>
      <Hero
        imgUrl={singleBook.imgUrl}
        title={singleBook.title}
        subtitle={singleBook.author}
      ></Hero>
      <Content>
        <div className="w-full flex flex-col">
          <div className=" w-1/6 bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-md text-white text-center">
            <a href={singleBook.linkToPurchase} target="_blank">
              Buy on Amazon
            </a>
          </div>

          <div>
            <CopyToClipboard text={singleBook.linkToPurchase}>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 active:bg-red-100 w-1/6 mt-2 py-1 px-3 rounded-md text-white"
              >
                Copy link to Amazon
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </Content>
      <Footer
        pageName="Next book"
        href={`/single-book/${+singleBook.id + 1}`}
      ></Footer>
    </div>
  );
}
