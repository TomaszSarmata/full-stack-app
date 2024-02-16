import { Client } from "pg";
const pg = new Client({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});
pg.connect();

export default pg;
