const express = require('express')
const router = express.Router();

const repController = require('../controllers/recipes')

const { isAuthenticated } = require('../middleware/authenticate')

router.get('/', repController.getAll);
router.get('/:id', repController.getSingle);
router.post('/', isAuthenticated, repController.addRecipe);
router.put('/:id', isAuthenticated, repController.updateRecipe);
router.delete('/:id', isAuthenticated, repController.deleteRecipe);

module.exports = router;