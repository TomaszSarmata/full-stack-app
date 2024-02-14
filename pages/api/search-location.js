import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const input = req.query.inputValue;

  try {
    const pattern = input + "%";
    const location = await sql`
    select * from locations
    where title like ${pattern}
    `;
    res.status(200).json(location);
  } catch (error) {
    console.error(error, "failed to fetch the location");
    res.status(5000).json({ message: "internal server error" });
  }
}
