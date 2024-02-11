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
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    const fetchIds = async () => {
      try {
        const response = await fetch(`/api/books`);
        const data = await response.json();
        const listOfIds = data.map((book) => book.id);
        setBookIds(listOfIds);
      } catch (error) {
        console.error("failed to fetch:", error);
      }
    };
    fetchIds();
  }, []);

  useEffect(() => {
    if (!bookId) return;
    getSingleBook(bookId);
  }, [bookId, bookIds]);

  const getNextBookId = () => {
    const currentId = Number(bookId);
    const index = bookIds.indexOf(currentId);
    return index >= 0 && index < bookIds.length - 1
      ? bookIds[index + 1]
      : bookIds[0];
  };

  const getPreviousBookId = () => {
    const currentId = Number(bookId);
    const index = bookIds.indexOf(currentId);
    return index > 0 ? bookIds[index - 1] : bookIds[2];
  };

  const getSingleBook = async (id) => {
    const res = await fetch(`/api/book-by-id?id=${id}`);
    const data = await res.json();
    const { book } = data;
    setSingleBook(book);
  };

  if (!singleBook) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full">
      <Header name="Book Details Page"></Header>
      <Hero
        imgUrl={singleBook.img_url}
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
      <div className="flex justify-start bg-gray-300 pb-8 gap-2 w-1/2 ml-2">
        <Footer
          pageName="next book"
          href={`/single-book/${getNextBookId()}`}
        ></Footer>
        <Footer
          pageName="previous book"
          href={`/single-book/${getPreviousBookId()}`}
        ></Footer>
        <Footer pageName="books page" href="/books"></Footer>
      </div>
    </div>
  );
}
