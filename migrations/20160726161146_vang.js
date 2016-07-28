exports.up = function(knex, Promise) {
  return knex.schema.createTable('vang', function (table) {
    table.increments('id');
    table.string('company');
    table.integer('q1');
    table.integer('q2');
    table.integer('q3');
    table.integer('q4');
    table.integer('q5');
    table.string('comments')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vang');
};
