const router = require('express').Router();
const repController = require('../controllers/recipes')


router.get('/', (req, res) => { res.send(
    `<h1>Welcome to my CSE341 Food 101 repo</h1>
    <button><a href="/recipes">Recipes</a></button>
    <button><a href="/desserts">Desserts</a></button>
    <button><a href="/api-docs">API Documentation</a></button>`
)});

router.get('/recipes', repController.getAll);
router.get('/desserts', repController.getAll);
router.get('/api-docs', require('./swagger'));

module.exports = router