exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
      table.increments('id').primary();
      table.string("nome").notNullable();
      table.string("email").notNullable();
      table.string("telefone").notNullable();
   
      table.timestamp('created_at').default(knex.fn.now());
      table.timestamp('updated_at').default(knex.fn.now());
    })
  };
  
  
  exports.down = (knex) =>{
      return knex.schema.dropTableIfExists("users")
  };
  