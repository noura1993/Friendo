const express = require("express");
const path = require("path");
const { Pool, Client } = require('pg');
const parser = require('body-parser');

require('dotenv').config()

const app = express();
const port = process.env.PORT || "8080";
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
}
);



app.use(parser.json());

app.get("/", (req, res) => {
  res.status(200).send("Spicy Bambinos");
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users;", (err, sqlRes) => {
      if (err) {
          console.log(err)
          res.json({ error: err });
      } else {
          console.log(sqlRes.rows);
          res.json(sqlRes.rows);
          // return
      }
  })
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});