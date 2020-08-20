DROP TABLE IF EXISTS interests;
-- DROP TABLE join_users_and_interests;
-- DROP TABLE bookmark;
DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS lastSeen;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, /* ? */
  gender VARCHAR(255) NOT NULL,
  age INT,
  address TEXT,
  longitude decimal,
  latitude decimal,
  picture VARCHAR(255) NOT NULL /* BINARY, BYTEA ? */
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  chatKey VARCHAR(255) NOT NULL,
  senderEmail VARCHAR(255) NOT NULL,
  receiverEmail VARCHAR(255) NOT NULL,
  senderName VARCHAR(255) NOT NULL,
  receiverName VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  timestamp bigint NOT NULL 
);

CREATE TABLE lastSeen (
  chatKey VARCHAR(255) NOT NULL,
  userEmail VARCHAR(255) NOT NULL,
  lastSeen bigint NOT NULL 
);

CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  userId INT references users(id),
  friendId INT references users(id)
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


INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('John', 'Cook', 'john@cook.com', 'asdf', 'Male', 23, 'https://api.adorable.io/avatars/127/John.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('James', 'Fraser', 'james@fraser.com', 'asdf', 'Male', 33, 'https://api.adorable.io/avatars/127/James.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('Alex', 'Jones', 'alex@jones.com', 'asdf', 'Female', 31, 'https://api.adorable.io/avatars/127/Alex.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('Robin', 'Hood', 'robin@hood.com', 'asdf', 'Female', 24, 'https://api.adorable.io/avatars/127/Robin.png');


INSERT INTO interests (name) VALUES ('Gaming');
INSERT INTO interests (name) VALUES ('Programming');
INSERT INTO interests (name) VALUES ('Dancing');
INSERT INTO interests (name) VALUES ('Rock Climbing');
INSERT INTO interests (name) VALUES ('Hiking');
INSERT INTO interests (name) VALUES ('Chess');

INSERT INTO friends (userId, friendId) VALUES (1, 2);
INSERT INTO friends (userId, friendId) VALUES (1, 3);
INSERT INTO friends (userId, friendId) VALUES (2, 4);








