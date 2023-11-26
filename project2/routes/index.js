const router = require('express').Router();
const passport = require('passport');
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
router.get('/login', passport.authenticate('github'), (req, res) => {});
router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });  
});

module.exports = router