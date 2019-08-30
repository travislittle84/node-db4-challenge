
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {recipe_id: 1, ingredient_id: 3, quantity: 2, step: 1},
        {recipe_id: 1, ingredient_id: 2, quantity: 1.5, step: 2},
        {recipe_id: 1, ingredient_id: 1, quantity: 1, step: 3}     
      ]);
    });
};
