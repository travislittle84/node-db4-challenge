const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

// return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db('recipe_details')
        .join('ingredients', 'ingredients.ingredient_id', 'recipe_details.ingredient_id')
        .select('ingredients.ingredients', 'recipe_details.quantity')
        .where('recipe_details.recipe_id', recipe_id)
}

// return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db('recipe_details')
        .join('ingredients', 'ingredients.ingredient_id', 'recipe_details.ingredient_id')
        .select('ingredients.ingredients', 'recipe_details.quantity', 'recipe_details.step')
        .where('recipe_details.recipe_id', recipe_id)
        .orderBy('step')

}