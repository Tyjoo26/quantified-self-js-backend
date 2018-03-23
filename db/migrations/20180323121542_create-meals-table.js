
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE meals(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT)`)
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE meals')
};
