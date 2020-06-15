exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.string("id").primary();
    table.string("title");
    table.string("description");
    table.string("user_id");
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
