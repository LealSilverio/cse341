const router = require('express').Router();
const baseController = require('../controllers/base')
const contactsController = require('../controllers/contacts')

router.get('/', baseController.buildIndex);
router.get('/contacts', contactsController.getAll)

module.exports = router