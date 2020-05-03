// creates a node-postgres "pool" of query clients
// we can use this to send database queries to select/insert/update data in our database

const pg = require("pg");
require("dotenv").config();

const db = new pg.Pool({
    // to connect to a remote database on Heroku,
    connectionString: process.env.DATABASE_URL
    // if not on heroku, it 'll fall back to your local database.
});

// this object is exported so we can use it elsewhere in our app
module.exports = db;