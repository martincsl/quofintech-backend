exports.up = function(knex) {
  return knex.schema.createTable('companies', function (table) {
    table.string('companyId').primary();
    table.string('companyName').notNullable();
    table.string('companyPhone').notNullable();
    table.string('companyMobilePrefix').notNullable();
    table.string('companyMobile').notNullable();
    table.string('companyCity').notNullable();
    table.string('companyAddress').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};