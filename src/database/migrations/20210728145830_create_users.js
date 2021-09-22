exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('userId').primary();
    table.string('userName').notNullable();
    table.string('userPassword').notNullable();
    table.string('userMobilePrefix').notNullable();
    table.string('userMobile').notNullable();
    table.string('userEmail').notNullable();
    table.string('userCity').notNullable();
    table.string('userAddress').notNullable();
    table.string('userOccupation').notNullable();
    table.timestamps();
    table.string('sponsorId').notNullable();
    table.foreign('sponsorId').references('sponsorId').inTable('sponsors');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};