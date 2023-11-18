const express = require('express')
const router = express.Router();

const dessertController = require('../controllers/desserts')

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);
router.post('/', dessertController.addDessert);
router.put('/:id', dessertController.updateDessert);
router.delete('/:id', dessertController.deleteDessert);

module.exports = router;