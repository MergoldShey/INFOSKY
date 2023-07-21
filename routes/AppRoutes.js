const Router = require('express').Router;
const AppControllers = require('../controllers/AppControllers');
const appRoutes = Router();

appRoutes.get('/', AppControllers.getIndexPage);
module.exports = { appRoutes };