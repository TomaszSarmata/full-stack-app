import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const messages = await sql`
    select * from contact_messages
    order by created_at desc
  `;
  res.json(messages);
}
