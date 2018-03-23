
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE foods(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    calories INTEGER,
    meal_id INTEGER)`)
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE foods')
};
