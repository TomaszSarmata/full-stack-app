import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_CONNECTON_STRING);

export default sql;
