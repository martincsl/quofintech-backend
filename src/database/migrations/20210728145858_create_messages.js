exports.up = function(knex) {
  return knex.schema.createTable('messages', function (table) {
    table.increments();
    table.string('contactName').notNullable();
    table.string('contactMobile').notNullable();
    table.string('contactEmail').notNullable();
    table.string('contactMsg').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};