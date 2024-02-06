import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const id = +req.query.id;
  const likes = +req.query.likes;

  const books = await sql`
  update books
  set 
    likes = ${likes}
  where 
    id = ${id}
  `;
  res.json({ message: "Number of likes and dislikes updated successfully" });
}
