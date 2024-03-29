import Header from "@/components/shared/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";

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
        <div className="w-full flex flex-col px-2">
          <div className=" w-1/3 sm:w-2/6 md:w-3/12 lg:w-2/12 bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-md text-white text-center">
            <a href={singleBook.link_to_purchase} target="_blank">
              Buy on Amazon
            </a>
          </div>

          <div className="w-1/3 sm:w-2/6 md:w-3/12 lg:w-2/12">
            <CopyToClipboard text={singleBook.link_to_purchase}>
              <button
                type="button"
                className="w-full text-xs bg-gray-500 hover:bg-blue-700 active:bg-red-100  mt-2 py-1 px-2 rounded-md text-white"
              >
                Copy link to Amazon
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </Content>
      <Footer
        buttons={[
          {
            pageName: "previous book",
            href: `/single-book/${getPreviousBookId()}`,
          },
          {
            pageName: "next book",
            href: `/single-book/${getNextBookId()}`,
          },
          {
            pageName: "Books Page",
            href: "/books",
          },
        ]}
      ></Footer>
    </div>
  );
}
