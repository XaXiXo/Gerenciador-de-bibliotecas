
exports.up = function(knex) {
    return knex.schema.alterTable("users", (table) => {
        table.string("password").notNullable()
    })
};


exports.down = function(knex) {
    return knex.schema.alterTable("users", (table) => {
        table.dropColumm("password")
    })
};

