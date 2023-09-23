const express = require('express');
const router = express.Router();

// api is added by default
router.get('/jobslist', (req, res) => {
    res.status(200).json({
        sucess: true,
        message : 'route is working'
    })
});

module.exports = router;