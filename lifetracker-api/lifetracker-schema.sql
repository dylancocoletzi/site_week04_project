CREATE TABLE users (
    id  SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    username TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TEXT NOT NULL DEFAULT NOW()
)