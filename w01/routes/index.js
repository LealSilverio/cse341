const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.buildIndex)
routes.get('/name', lesson1Controller.buildNamePage)

module.exports = routes;