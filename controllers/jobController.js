const Job = require('../models/jobs');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
    // let job = await Job.findById(req.params.id);
    // console.log(job);
    // if(!job) {
    //     return res.status(404).json({
    //         success : false,
    //         message : 'Job not found',
    //     });
    // }
    // else{
    // job  = await Job.findByIdAndUpdate(req.params.id, req.body, {
    //     new : true,
    //     runValidators : true

    // });
    // res.status(200).json({
    //     success : true,
    //     message : 'Job was updated successfully',
    //     data : job
    // });
    // }

    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid job ID format',
            });
        }
        let job = await Job.findById(req.params.id);
        // console.log(job);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found',
            });
        } else {
            job = await Job.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
            res.status(200).json({
                success: true,
                message: 'Job was updated successfully',
                data: job
            });
        }
    } catch (error) {
        // console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating the job',
        });
    }
}


// Delete a job from the database => api/job/delete/:id
exports.deleteJob = async (req, res, next) => {
    
    // handle error / null /undefined
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid job ID format',
        });
    }
    let job = await Job.findById(req.params.id);
    if (!job) {
        return res.status(404).json({
            success: false,
            message: 'Job not found',
        });
    }

    job = await Job.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success : true,
        message : "job deleted successfully"
    })
};