exports.up = function (knex) {
  return knex.schema.createTable('loans', function (table) {
    table.increments();
   
    table.string('loanProduct').notNullable();
    table.integer('loanCapital').notNullable();
    table.integer('loanTerm').notNullable();
    table.integer('loanPayment').notNullable();
    table.integer('loanTotalAmount').notNullable();
    table.string('loanExpireDate').notNullable();
    table.string('loanRequestStatus').notNullable();
    table.string('loanRequestDenialMsg').notNullable();
    table.string('loanDocStatus').notNullable();
    table.timestamps();
    table.string('userId').notNullable();
    table.string('sponsorId').notNullable();
    table.string('customerId').notNullable();
    table.foreign('userId').references('userId').inTable('users');
    table.foreign('sponsorId').references('sponsorId').inTable('sponsors');
    table.foreign('customerId').references('customerId').inTable('customers');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('loans');
};