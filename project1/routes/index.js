const router = require('express').Router();
const userController = require('../controllers/users')


router.get('/', (req, res) => { res.send(
    `<h1>Welcome to my CSE341 Project 1 repo</h1>
    <button><a href="/users">Users</a></button>
    <button><a href="/api-docs">API Documentation</a></button>`
)});
router.get('/users', userController.getAll);
router.get('/api-docs', require('./swagger'));

module.exports = router