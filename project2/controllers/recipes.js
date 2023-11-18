const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const repController = {}  

repController.getAll = async (req, res) => {
    const result = await mongodb.getDb().db('Recipes').collection('Recipes').find();
    result.toArray().then((Recipes) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(Recipes);
    });
};

repController.getSingle = async (req, res) => {
    const recipeId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db('Recipes').collection('Recipes').find({ _id: recipeId});
    result.toArray().then((Recipes) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(recipes[0]);
    });
};

repController.addRecipe = async(req, res) => {
    const recipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db().collection('recipes').insertOne(recipe)
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the recipe.')
    }
}

repController.updateRecipe = async(req, res) => {
    const recipeId = new Object(req.params.id);
    const recipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db('Recipes').collection('Recipes').replaceOne({_id: recipeId}, recipe)
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the recipe.')
    }
}
repController.deleteRecipe = async(req, res) => {
    const recipeId = new Object(req.params.id);
    const response = await mongodb.getDb.db('Recipes').collection('Recipes').remove({_id: recipeId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the recipe.')
    }
}

module.exports = repController;