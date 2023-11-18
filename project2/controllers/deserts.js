const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const desertController = {}  

desertController.getAll = async (req, res) => {
    const result = await mongodb.getDb().db('Project2').collection('desert').find();
    result.toArray().then((desert) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(desert);
    });
};

desertController.getSingle = async (req, res) => {
    const desertId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db('Project2').collection('desert').find({ _id: desertId});
    result.toArray().then((desert) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(desert[0]);
    });
};

desertController.addDesert = async(req, res) => {
    const desert = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db().collection('desert').insertOne(desert)
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating desert.')
    }
}

desertController.updateDesert = async(req, res) => {
    const desertId = new Object(req.params.id);
    const desert = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        ingredientQuantity: req.body.ingredientQuantity,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        averagePrice: req.body.averagePrice,
        steps: req.body.steps,
    }
    const response = await mongodb.getDb.db().collection('desert').replaceOne({_id: desertId}, desert)
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating desert.')
    }
}
desertController.deleteDesert = async(req, res) => {
    const desertId = new Object(req.params.id);
    const response = await mongodb.getDb.db().collection('desert').remove({_id: desertId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting desert.')
    }
}

module.exports = desertController;