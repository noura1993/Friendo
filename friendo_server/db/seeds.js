// const { Pool, Client } = require('pg');
// const pool = new Pool();
// let client = null;

// const sqlOrDie = (query) => {
//     console.log(query);
//     return client.query(query)
// }

// (async function () {
//     client = await pool.connect()

//     await sqlOrDie("DROP TABLE IF EXISTS users;");
//     await sqlOrDie("CREATE TABLE users (name VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, secret VARCHAR(50) NOT NULL);");
//     await sqlOrDie("INSERT INTO users (name, password, secret) VALUES ('ed', 'abc', 'ed!');");
//     await sqlOrDie("INSERT INTO users (name, password, secret) VALUES ('jack', 'def', 'zombies!');");
//     await sqlOrDie("INSERT INTO users (name, password, secret) VALUES ('craig', '123', 'burgers');");
//     await sqlOrDie("INSERT INTO users (name, password, secret) VALUES ('nourhan', '456', 'wilsona!');");
//     await sqlOrDie("INSERT INTO users (name, password, secret) VALUES ('rumen', '000', 'coffee can sorting system.');");

//     client.release()
// })()