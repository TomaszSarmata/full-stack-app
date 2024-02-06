import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const id = +req.query.id;
  const dislikes = +req.query.dislikes;

  if (id === undefined || id === null) {
    res.status(400).json({ message: "Book id is required" });
    return;
  }
  if (dislikes === undefined || dislikes === null) {
    res.status(400).json({ message: "Book dislikes are required" });
    return;
  }

  const books = await sql`
  update books
  set
    dislikes=${dislikes}
  where
    id=${id}
  `;
  res.json({ message: "The number of dislikes updated successfully" });
}
