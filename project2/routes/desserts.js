const express = require('express')
const router = express.Router();

const dessertController = require('../controllers/desserts')

const { isAuthenticated } = require('../middleware/authenticate')

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);
router.post('/', isAuthenticated, dessertController.addDessert);
router.put('/:id', isAuthenticated, dessertController.updateDessert);
router.delete('/:id', isAuthenticated, dessertController.deleteDessert);

module.exports = router;