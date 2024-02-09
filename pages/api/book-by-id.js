import sql from "@/utils/postgres";
export default async function handler(req, res) {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({ error: "Missing or invalid 'id' parameter" });
  }
  try {
    const books = await sql`
    select * from books
    where  id = ${id}
  `;

    if (books.length < 1) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    const foundBook = books[0];

    res.json({ book: foundBook });
  } catch (error) {
    console.error("Failed to fetch a book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
