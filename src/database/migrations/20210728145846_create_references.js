exports.up = function(knex) {
  return knex.schema.createTable('references', function (table) {
    table.string('referenceId').primary();
    table.string('referenceName').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('references');
};