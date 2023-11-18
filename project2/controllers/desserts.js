const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const dessertController = {}  

dessertController.getAll = async (req, res) => {
    const result = await mongodb.getDb().db('Recipes').collection('Dessert').find();
    result.toArray().then((dessert) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dessert);
    });
};

dessertController.getSingle = async (req, res) => {
    const dessertId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db('Recipes').collection('Dessert').find({ _id: dessertId});
    result.toArray().then((dessert) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dessert[0]);
    });
};

dessertController.addDessert = async(req, res) => {
    const dessert = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db().collection('dessert').insertOne(dessert)
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating dessert.')
    }
}

dessertController.updateDessert = async(req, res) => {
    const dessertId = new Object(req.params.id);
    const dessert = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db().collection('dessert').replaceOne({_id: dessertId}, dessert)
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating dessert.')
    }
}
dessertController.deleteDessert = async(req, res) => {
    const dessertId = new Object(req.params.id);
    const response = await mongodb.getDb.db().collection('dessert').remove({_id: dessertId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting dessert.')
    }
}

module.exports = dessertController;