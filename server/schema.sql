-- CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL UNIQUE
);

CREATE TABLE room (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL UNIQUE
);

CREATE TABLE messages (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  user int NOT NULL,
  room int NOT NULL,

  FOREIGN KEY (user)
    REFERENCES user(id),

  FOREIGN KEY (room)
    REFERENCES room(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

