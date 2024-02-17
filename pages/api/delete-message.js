import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const messageId = req.query.messageId;

  try {
    const message = await sql`
    delete from contact_messages where id = ${messageId}
  `;
    res.json({ message: "Success. The message was deleted" });
  } catch (error) {
    console.error("Failed to delete the message", error);
    res.status(500).json({ error: "Internal Sever Error" });
  }
}
