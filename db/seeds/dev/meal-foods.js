
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meal_foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal_foods').insert([
        { meal_id: 1, food_id: 1},
        { meal_id: 1, food_id: 3},
        { meal_id: 2, food_id: 1},
        { meal_id: 2, food_id: 4},
        { meal_id: 3, food_id: 2},
        { meal_id: 4, food_id: 3},
        { meal_id: 3, food_id: 2},
        { meal_id: 4, food_id: 3},
        { meal_id: 4, food_id: 4}
      ]);
    });
};
