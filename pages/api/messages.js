import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const name = req.query.name;
  const email = req.query.email;
  const message = req.query.message;

  if (name === null || name === undefined) {
    res.status(400).json({ message: "Plese provide the name" });
  }
  if (email === null || email === undefined) {
    res.status(400).json({ message: "Plese provide the email" });
  }
  if (message === null || message === undefined) {
    res.status(400).json({ message: "Plese provide the message" });
  }

  const messages = await sql`
  insert into contact_messages 
    (name, email, message)
  values (${name},${email},${message})
  `;

  res.json({ message: "Contact details submitted successfully" });
}
