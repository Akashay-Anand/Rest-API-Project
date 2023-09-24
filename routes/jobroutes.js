const express = require('express');
const router = express.Router();

// Import jobs controller method
const {getJoblist,
    createJob
} = require('../controllers/jobController');

// exact route is "api/joblist", but first part is handled in server.js file.
router.get('/job/list', getJoblist);
// router.route('/joblist').get(getJoblist);

router.route('/job/createjob').post(createJob);


module.exports = router;