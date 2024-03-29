import sql from "@/utils/postgres";
// import pg from "@/utils/pg";

export default async function handler(req, res) {
  let locations;
  const input = req.query.inputValue;

  if (input === null || input === undefined) {
    try {
      locations = await sql`
      select * from locations
    `;
      res.status(200).json(locations);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // try {
    //   locations = await pg.execute(`
    //     select * from locations where title like %${input}%
    //   `);
    //   res.status(200).json(locations);
    // } catch (error) {
    //   console.error("Failed to fetch the location/s:", error);
    //   res.status(500).json({ error: "Internal Server Error" });
    // }

    try {
      const pattern = "%" + input + "%";
      locations = await sql`
        select * from locations
        where title ilike ${pattern}
    `;
      res.status(200).json(locations);
    } catch (error) {
      console.error("Failed to fetch your locations:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
