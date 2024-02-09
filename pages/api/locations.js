import sql from "@/utils/postgres";

export default async function handler(req, res) {
  try {
    const locations = await sql`
    select * from locations
  `;
    res.json(locations);
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
