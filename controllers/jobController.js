const Job = require('../models/jobs');


// get all job listings => 'api/jobs'
// get all job listings => 'api/jobs/list'
exports.getJoblist = async (req,res,next) => {

    const jobs = await Job.find();

    res.status(200).json({
        sucess: true,
        results : jobs.length,
        data : jobs 
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

// Update a job => /api/job/update/:id
exports.updateJob = async (req, res, next) => {
    let job = await Job.findById(req.params.id);
    console.log(job);
    if(!job) {
        res.status(404).json({
            success : false,
            message : 'Job not found',
        });
    }
    job  = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : false
    });
    res.status(200).json({
        success : true,
        message : 'Job was updated successfully',
        data : job
    });
}