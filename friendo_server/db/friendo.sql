DROP TABLE interest;
DROP TABLE join_users_and_interests;
DROP TABLE bookmark;
DROP TABLE user;


CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT,
  picture VARCHAR(255) NOT NULL, /* BINARY, BYTEA ? */
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL /* ? */
);

CREATE TABLE bookmark (
  id SERIAL primary key,
  name VARCHAR(255) NOT NULL,
  user_id INT REFERENCES user(id)
);


CREATE TABLE join_users_and_interests (
  id SERIAL primary key,
  user_id INT REFERENCES user(id),
  interest_id INT references interest(id)
);

CREATE TABLE interest(
  id SERIAL primary key,
  name VARCHAR(255) NOT NULL
)