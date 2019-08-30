const express = require('express')


const server = express()

const Recipes = require('./recipes/recipes-model.js')

server.use(express.json())

server.get('/api/recipes', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get recipes'})
        })
})

server.get('/api/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
        .then(shoppingList => {
            res.status(200).json(shoppingList)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get shopping list'})
        })
})

server.get('/api/recipes/:id/instructions', (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get instructions'})
        })
})



module.exports = server