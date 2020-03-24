const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.listen(3333);

/**
 * sqLite
 * usando query builder: KNEX.JS
 * http://knexjs.org/
 * npm install knex
 * npm install sqlite3
 * npx knex init
 * criar migration - npx knex migrate:make create_ongs
 * rodar migração - npx knex migrate:latest
 */