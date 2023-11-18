const express = require('express')
const router = express.Router();

const repController = require('../controllers/recipes')

router.get('/', repController.getAll);
router.get('/:id', repController.getSingle);
router.post('/', repController.addRecipe);
router.put('/:id', repController.updateRecipe);
router.delete('/:id', repController.deleteRecipe);

module.exports = router;