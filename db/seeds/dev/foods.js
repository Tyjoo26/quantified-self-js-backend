
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Banana', calories: 123},
        {id: 2, name: 'Sandwich', calories: 600},
        {id: 3, name: 'Granola Bar', calories: 500},
        {id: 4, name: 'Oreo', calories: 200}
      ]);

    });
};
