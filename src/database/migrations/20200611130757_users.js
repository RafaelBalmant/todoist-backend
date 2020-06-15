exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("username").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("token");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
