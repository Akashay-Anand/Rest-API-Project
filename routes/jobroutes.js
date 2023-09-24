const express = require('express');
const router = express.Router();

// Import jobs controller method
const {getJoblist} = require('../controllers/jobController');

// exact route is "api/joblist", but first part is handled in server.js file.
router.get('/joblist', getJoblist);
// router.route('/joblist').get(getJoblist);

module.exports = router;