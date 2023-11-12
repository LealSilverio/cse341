const router = require('express').Router();
const userController = require('../controllers/users')

router.get('/', (req, res) => { res.send('Hello World')});
router.get('/users', userController.getAll);

module.exports = router