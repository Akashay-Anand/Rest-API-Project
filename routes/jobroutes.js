const express = require('express');
const router = express.Router();

// Import jobs controller method
const {getJoblist,
    createJob,
    updateJob,
    deleteJob,
    getUniqueJob
} = require('../controllers/jobController');

// exact route is "api/job/list", but first part is handled in server.js file.

router.get('/job/list', getJoblist);
// router.route('/joblist').get(getJoblist);

router.route('/job/:id/:slug').get(getUniqueJob);

router.route('/job/createjob').post(createJob);

router.route('/job/update/:id').put(updateJob);

router.route('/job/delete/:id').delete(deleteJob);

// router.route('/jobstats/:keyword').get(jobStats);

module.exports = router;