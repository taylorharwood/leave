var router = require('express').Router();
var MapController = require('../controllers/MapController');

router.post('/origin/:origin/destination/:destination', MapController.index);

module.exports = router;
