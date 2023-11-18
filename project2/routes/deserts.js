const express = require('express')
const router = express.Router();

const desertController = require('../controllers/deserts')

router.get('/', desertController.getAll);
router.get('/:id', desertController.getSingle);
router.post('/', desertController.addDesert);
router.put('/:id', desertController.updateDesert);
router.delete('/:id', desertController.deleteDesert);

module.exports = router;