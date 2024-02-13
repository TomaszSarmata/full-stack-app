import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (name === null || name === undefined || name === "") {
    res.status(400).json({ message: "Plese provide the name" });
    return;
  }
  if (email === null || email === undefined || email === "") {
    res.status(400).json({ message: "Plese provide the email" });
    return;
  }
  if (message === null || message === undefined || message === "") {
    res.status(400).json({ message: "Plese provide the message" });
    return;
  }

  const messages = await sql`
  insert into contact_messages 
    (name, email, message)
  values (${name},${email},${message})
  `;

  res.json({ message: "Your message was sent successfully!" });
}
