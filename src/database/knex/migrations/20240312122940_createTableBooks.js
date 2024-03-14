exports.up = (knex) => {
    return knex.schema.createTable("livros", (table) => {
      table.increments('id').primary();
      table.string("titulo").notNullable();
      table.string("autor").notNullable();
      table.string("categoria").notNullable();
      table.boolean("disponibilidade").defaultTo("true")

      table.timestamp('created_at').default(knex.fn.now());
      table.timestamp('updated_at').default(knex.fn.now());
    })
  };
  
  
  exports.down = (knex) =>{
      return knex.schema.dropTableIfExists("livros")
  };
  