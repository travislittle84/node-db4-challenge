
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredients', 255).notNullable()
    })
    .createTable('recipe_details', tbl => {
        tbl.increments('recipe_details_id')
        tbl.float('quantity', 5).notNullable()
        tbl.integer('step', 3).notNullable()
        tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('ingredients_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    
        
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_details')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
  
};
