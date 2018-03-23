
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE foods(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    calories INTEGER)`)
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE foods')
};
