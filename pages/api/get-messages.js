import sql from "@/utils/postgres";

export default async function handler(req, res) {
  try {
    const messages = await sql`
    select * from contact_messages
    order by created_at desc
  `;
    res.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
