const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;
const contactController = {};

contactController.getAll = async (req, res) => {
    const result = await mongodb.getDb().db('Project1').collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

contactController.getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db('Project1').collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = contactController;