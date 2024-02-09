import sql from "@/utils/postgres";

export default async function handler(req, res) {
  try {
    const books = await sql`
    select * from books
    order by id
  `;

    res.json(books);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
