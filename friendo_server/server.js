const express = require("express");
const path = require("path");
const { Pool, Client } = require('pg');
const parser = require('body-parser');

const app = express();
const port = process.env.PORT || "8080";

app.use(parser.json());

app.get("/", (req, res) => {
  res.status(200).send("Spicy Bambinos");
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users;", (err, sqlRes) => {
      if (err) {
          console.log(err)
      } else {
          console.log(sqlRes.rows);
          res.json(sqlRes.rows);
      }
      res.json(0);
  })
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});