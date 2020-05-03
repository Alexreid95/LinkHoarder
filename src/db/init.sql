BEGIN;

    DROP TABLE IF EXISTS users
    CASCADE;


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(511) NOT NULL
);

INSERT INTO users
    (username, email, user_password)
VALUES
    ('user1', 'user@admin.com', 'password123');

COMMIT;