const router = require('express').Router();
const baseController = require('../controllers/base')

router.get('/', baseController.buildBase);

module.exports = router