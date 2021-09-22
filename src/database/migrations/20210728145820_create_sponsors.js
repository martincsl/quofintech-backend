exports.up = function(knex) {
  return knex.schema.createTable('sponsors', function (table) {
    table.string('sponsorId').primary();
    table.string('sponsorName').notNullable();
    table.string('sponsorPhone').notNullable();
    table.string('sponsorMobilePrefix').notNullable();
    table.string('sponsorMobile').notNullable();
    table.string('sponsorCity').notNullable();
    table.string('sponsorAddress').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sponsors');
};