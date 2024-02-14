import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const input = req.query.inputValue;
  console.log(input, "input here");

  try {
    const pattern = input + "%";
    const location = await sql`
    select * from locations
    where title like ${pattern}
    `;
    res.status(200).json(location);
  } catch (error) {
    console.error("failed to fetch the location", error.message || error);
    res.status(500).json({ message: "internal server error" });
  }
}
