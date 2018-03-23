
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE meal_foods(
    id SERIAL PRIMARY KEY NOT NULL,
    meal_id INTEGER,
    food_id INTEGER)`)
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE meal_foods`)
};
