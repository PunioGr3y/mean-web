var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* location pages */
router.get('/',ctrlLocations.homelist );
router.get('/location',ctrlLocations.locationinfo );
router.get('/location/review/new',ctrlLocations.addReview );

/** Other pages */
router.get('/about',ctrlOthers.about );


module.exports = router;
