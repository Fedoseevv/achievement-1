const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "10.100.109.158",
    database: "postgres",
    password: "password",
    port: "5432"
});

module.exports = pool;