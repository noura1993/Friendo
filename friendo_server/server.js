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

app.get("/usersByInterest/:interest", (req, res) => {
  console.log(req.params.interest)
  pool.query("SELECT * FROM users WHERE lower(interest) = $1;", [req.params.interest.toLowerCase()], (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(sqlRes.rows);
    }
  })
});

app.post("/users/create", (req, res) => {
  console.log(`users create is happening with ${JSON.stringify(req.body)}`)

  pool.query("INSERT INTO users \
  (firstName, lastName, email, password, interest, gender, age, picture, latitude, longitude, address, bio) VALUES \
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) \
  RETURNING id",
  [req.body.firstName, req.body.lastName, req.body.email, 
    req.body.password, req.body.interest, req.body.gender, req.body.age, "https://api.adorable.io/avatars/128/" + req.body.firstName + ".png", 55.9, -3.1, "Arthur's Seat", "I don't know shit"],
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
  picture = $8 \
  WHERE id = $9", 
  [req.body.firstname, req.body.lastname, req.body.email, 
    req.body.password, req.body.gender, req.body.age, req.body.picture, req.body.interest,
    id ],
    (err, sqlRes) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json("ok");
      }
    })
})

app.post("/messages", (req, res) => {
  const chatKey = req.body.senderEmail < req.body.receiverEmail ? req.body.senderEmail + '_' + req.body.receiverEmail : req.body.receiverEmail + '_' + req.body.senderEmail;
  pool.query("INSERT INTO messages (chatKey, senderEmail, receiverEmail, senderName, receiverName, body, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7);",
  [chatKey, req.body.senderEmail, req.body.receiverEmail, 
    req.body.senderName, req.body.receiverName, req.body.body, req.body.timestamp],
    (err, sqlRes) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json("ok");
      }
    })
})

app.get("/user/:email", (req, res) => {
  pool.query("SELECT * From users WHERE lower(email) = $1;", [req.params.email.toLowerCase()], (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(sqlRes.rows);
    }
  })
})

app.get("/messages/:senderEmail/:receiverEmail", (req, res) => {
  const chatKey = req.params.senderEmail < req.params.receiverEmail ? req.params.senderEmail + '_' + req.params.receiverEmail : req.params.receiverEmail + '_' + req.params.senderEmail;
  pool.query("SELECT * FROM messages WHERE chatKey = $1 ORDER BY timestamp DESC, id DESC;", [chatKey], (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(sqlRes.rows);
    }
  })
});

app.get("/friends/:id", (req, res) => {
  pool.query(`SELECT friends.id,
  firstUser.firstName AS user_first_name, 
  firstUser.lastName As user_last_name,
  firstUser.email AS user_email,
  secondUser.firstName AS friend_first_name, 
  secondUser.lastName AS friend_last_name, 
  secondUser.email AS friend_email,
  secondUser.picture AS friend_picture,
  secondUser.id AS friend_id
  FROM friends 
  INNER JOIN users AS firstUser
  ON firstUser.id = userId
  INNER JOIN users AS secondUser
  ON secondUser.id = friendID
  WHERE userID = $1;`, [req.params.id], (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(sqlRes.rows);
    }
  })
});

app.post("/friends", (req, res) => {
  pool.query("INSERT INTO friends (userId, friendId) VALUES ($1, $2);",
  [req.body.userId, req.body.friendId],
    (err, sqlRes) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json("ok");
      }
    })
})

app.delete("/friends/:id", (req, res) => {
  pool.query("DELETE FROM friends WHERE id = $1;", [req.params.id], (err, sqlRes) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json("ok");
    }
  })
});

app.get("/interests", (req, res) => {
  basicSQLfetch(res, "interests");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});