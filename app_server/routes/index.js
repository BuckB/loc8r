var express = require('express');
var router = express.Router();
var locationsCtrl = require('../controllers/locations');
var otherCtrl = require('../controllers/others');

/* Locations pages */
router.get('/', locationsCtrl.home);
router.get('/info', locationsCtrl.info);
router.get('/location/review/new', locationsCtrl.addReview);
/* Others pages */
router.get('/about', otherCtrl.about);

module.exports = router;
