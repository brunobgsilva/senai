CREATE DATABASE IF NOT EXISTS devflix;

CREATE TABLE IF NOT EXISTS user(
    id          SERIAL       PRIMARY KEY NOT NULL,
    nome        varchar(150) NOT NULL,
    email       varchar(200) NOT NULL UNIQUE,
    senha_hash  varchar(255) NOT NULL,
    criado_em   TIMESTAMP    NOT NULL DEFAULT NOW()
);