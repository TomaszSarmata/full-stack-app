export default function handler(req, res) {
  const id = req.query.id;
  let singleBook;
  const books = [
    {
      id: "1",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      imgUrl: "/images/1.png",
      linkToPurchase: "https://amzn.eu/d/e7GXwuT",
    },
    {
      id: "2",
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      imgUrl: "/images/2.png",
      linkToPurchase: "https://amzn.eu/d/3p7Fo8Q",
    },
    {
      id: "3",
      title: "Born a Crime",
      author: "Trevor Noah",
      imgUrl: "/images/3.png",
      linkToPurchase: "https://amzn.eu/d/eSaDawR",
    },
  ];
  singleBook = books.find((book) => {
    if (book.id === id) {
      return true;
    }
    return false;
  });
  res.json({ book: singleBook });
}
