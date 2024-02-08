const router = require('express').Router();
const baseController = require('../controllers/base')

router.get('/', baseController.writeName);

module.exports = router