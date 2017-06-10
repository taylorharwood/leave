var router = require('express').Router();
var UsersController = require('../controllers/UsersController');

router.post('/register', UsersController.create);
router.post('/login', UsersController.authenticate);

module.exports = router;