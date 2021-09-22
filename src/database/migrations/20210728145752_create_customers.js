exports.up = function(knex) {
  return knex.schema.createTable('customers', function (table) {
    table.string('customerId').primary();
    table.string('customerName').notNullable();
    table.string('customerBirthDate').notNullable();
    table.string('customerMobilePrefix').notNullable();
    table.string('customerMobile').notNullable();
    table.string('customerEmail').notNullable();
    table.string('customerCity').notNullable();
    table.string('customerAddress').notNullable();
    table.string('customerOccupation').notNullable();
    table.string('customerHiringType').notNullable();
    table.integer('customerSalary').notNullable();
    table.integer('customerLaborSeniority').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};