import sql from "@/utils/postgres";

export default async function handler(req, res) {
  // input = input[0].toUpperCase + input[1:]
  //   let input = "san francisco";
  // let formattedInput = input.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  let input = req.query.inputValue;

  try {
    const pattern = input + "%";
    const location = await sql`
    select * from locations
    where title ilike ${pattern}
    `;
    res.status(200).json(location);
  } catch (error) {
    console.error("failed to fetch the location", error.message || error);
    res.status(500).json({ message: "internal server error" });
  }
}
