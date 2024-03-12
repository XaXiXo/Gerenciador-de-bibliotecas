const knex = require("knex");
const { knex } = require("../database");


async function checkUsersExists(id) {
    const [user] = knex.query(`
    SELECT * FROM users WHERE id = ${id}
    `)
    return [{user}]
}

 module.exports = checkUserExists