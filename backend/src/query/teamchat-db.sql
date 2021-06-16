DROP DATABASE IF EXISTS teamchat;

CREATE DATABASE teamchat;

USE teamchat;

CREATE TABLE users
(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR (40) NOT NULL UNIQUE,
    avatar VARCHAR (255),
    email VARCHAR (30) NOT NULL UNIQUE,
    password VARCHAR (40) NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL
);

CREATE TABLE spaces
(
    space_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (40) NOT NULL,
    picture VARCHAR (255),
    description VARCHAR (255),
    adminId INT NOT NULL REFERENCES users(user_id), -- FOREIGN KEY
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL
);

CREATE TABLE messages
(
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    spaces_id INT NOT NULL REFERENCES spaces(space_id), -- FOREIGN KEY
    sender_id INT NOT NULL REFERENCES users(user_id), -- FOREIGN KEY
    receiver_id INT NOT NULL REFERENCES users(user_id), -- FOREIGN KEY
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL 
    
);

CREATE TABLE user_have_space
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id), -- FOREIGN KEY
    spaces_id INT NOT NULL REFERENCES spaces(space_id), -- FOREIGN KEY
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NULL DEFAULT NULL 

);