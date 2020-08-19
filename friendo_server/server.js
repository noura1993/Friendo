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
  // password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

app.use(parser.json());

app.get("/", (req, res) => {
  res.status(200).send("Spicy Bambinos");
});

basicSQLfetch = (res, table) => {
  pool.query("SELECT * FROM " + table + ";", (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(sqlRes.rows);
    }
  })
}

app.get("/users", (req, res) => {
  basicSQLfetch(res, "users");
});

app.post("/users/create", (req, res) => {
  console.log(`users create is happening with ${JSON.stringify(req.body)}`)

  pool.query("INSERT INTO users \
  (firstName, lastName, email, password, gender, age, picture) VALUES \
  ($1, $2, $3, $4, $5, $6, $7) \
  RETURNING id",
  [req.body.firstName, req.body.lastName, req.body.email, 
    req.body.password, req.body.gender, req.body.age, "https://api.adorable.io/avatars/128/" + req.body.firstName + ".png"],
    (err, sqlRes) => {
      if (err) {
        console.log(err)
        res.json({ error: err });
      } else {
        res.json(sqlRes.rows[0].id);
      }
    })
})

app.post("/users/:id", (req, res) => {
  const id = req.params.id;
  pool.query("UPDATE users SET \
  firstName = $1, \
  lastName = $2, \
  email = $3, \
  password = $4, \
  gender = $5, \
  age = $6, \
  picture = $7 \
  WHERE id = $8", 
  [req.body.firstname, req.body.lastname, req.body.email, 
    req.body.password, req.body.gender, req.body.age, req.body.picture,
    id ],
    (err, sqlRes) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json("ok");
      }
    })
})

app.get("/interests", (req, res) => {
  basicSQLfetch(res, "interests");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});