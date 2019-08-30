## Requirements
    
    -have a way to manage recipes.

    -have a way to manage ingredients.

    -a recipe could have more than one ingredient and the same ingredient can be used in multiple recipes. Examples are "cup of corn flour" or "gram of butter".

    -when saving the ingredients for a recipe capture the quantity required for that ingredient as a floating number.

    -have a way to save step by step instructions for preparing a recipe.


## Tables

recipes
ingredients
recipe_details


##  RECIPES Fields
-recipe_id*
-recipe_name (string)*

## INGREDIENTS Fields
-ingredient_id*
-ingredients (string)*


## RECIPE_DETAILS Fields
-recipe_details_id*
-recipe_id *foreign id* *
-ingredients_id *foregin id* *

-step (integer)*
-quantity (float)*


