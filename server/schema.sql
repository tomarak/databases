DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer(10), text varchar(255), user varchar(15), roomname varchar(15)
  );

CREATE TABLE users (
  /* Describe your table here.*/
  user varchar(15)
  );


insert into messages
  (id, text, user, roomname)
  values (1, "hello", "VINCE", "LOBBY");

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

