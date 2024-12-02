const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tabla");
    res.json(result.rows);
  } catch (err) {
    console.error("Error en la consulta:", err.message);
    res.status(500).send("Error en la conexión");
  }
});


app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
