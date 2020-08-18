DROP TABLE IF EXISTS interests;
-- DROP TABLE join_users_and_interests;
-- DROP TABLE bookmark;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT,
  picture VARCHAR(255) NOT NULL, /* BINARY, BYTEA ? */
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL /* ? */
);

-- CREATE TABLE bookmark (
--   id SERIAL primary key,
--   name VARCHAR(255) NOT NULL,
--   user_id INT REFERENCES user(id)
-- );


-- CREATE TABLE join_users_and_interests (
--   id SERIAL primary key,
--   user_id INT REFERENCES user(id),
--   interest_id INT references interest(id)
-- );

CREATE TABLE interests (
  id SERIAL primary key,
  name VARCHAR(255) NOT NULL
);


INSERT INTO users (name, age, picture, username, password) VALUES ('John', 23, 'https://api.adorable.io/avatars/127/John.png', 'john', 'asdf');
INSERT INTO users (name, age, picture, username, password) VALUES ('James', 21, 'https://api.adorable.io/avatars/127/James.png', 'jam123', '123');
INSERT INTO users (name, age, picture, username, password) VALUES ('Alex', 33, 'https://api.adorable.io/avatars/127/Alex.png', 'alex1983', 'passw0rd');
INSERT INTO users (name, age, picture, username, password) VALUES ('Robin', 24, 'https://api.adorable.io/avatars/127/Robin.png', 'robo', '456');


INSERT INTO interests (name) VALUES ('Gaming');
INSERT INTO interests (name) VALUES ('Programming');
INSERT INTO interests (name) VALUES ('Dancing');
INSERT INTO interests (name) VALUES ('Rock Climbing');
INSERT INTO interests (name) VALUES ('Hiking');
INSERT INTO interests (name) VALUES ('Chess');





