
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        { name: 'Banana', calories: 123},
        { name: 'Sandwich', calories: 600},
        { name: 'Granola Bar', calories: 500},
        { name: 'Oreo', calories: 200}
      ]);

    });
};
