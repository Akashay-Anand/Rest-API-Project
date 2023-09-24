const Job = require('../models/jobs');


// get all job listings => 'api/jobslist'
exports.getJoblist = (req,res,next) => {
    // res.status(200).json({
    //     sucess: true,
    //     message : 'route is working'
    // });
    res.status(200).json({
        success: true,
        Name: "anand",
        User: req.user,
        Method: req.method,
        MyMethod: req.myMethod
    });
}

// create a new job  => /api/job/new
exports.createJob = async (req, res, next) => {
    const bodydata = req.body;
    const job = await Job.create(bodydata);
    res.status(200).json({
        success: true,
        message : 'job was created successfully',
        values : job
    });
}