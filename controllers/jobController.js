const { response } = require('express');
const Job = require('../models/jobs');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const API_Filters = require('../utils/apiFilters');

// get all job listings => 'api/job/list'
exports.getJoblist = catchAsyncError( async (req,res,next) => {

    const apiFilters = new API_Filters(Job.find(), req.query);
    apiFilters.filter();
    apiFilters.sort();
    apiFilters.onlyFields(); 
    apiFilters.searchbyQuery();
    apiFilters.paginations();
    // const jobs = await Job.find();
    const jobs = await apiFilters.query;


    res.status(200).json({
        sucess: true,
        results : jobs.length,
        data : jobs 
    });
});

// get specific job by id or slug => 'api/job/:id/:slug'
exports.getUniqueJob = catchAsyncError( async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid job ID format',
        });
    }
    
    const job = await Job.find({$and: [{_id: req.params.id}, {slug: req.params.slug}]});

    if (!job || job.length === 0) {
        return next(new ErrorHandler('Job not found', 404));
    }

    res.status(200).json({
        success: true,
        data: job
    });

});

// create a new job  => /api/job/new
exports.createJob = catchAsyncError( async (req, res, next) => {
    const bodydata = req.body;
    const job = await Job.create(bodydata);
    res.status(200).json({
        success: true,
        message : 'job was created successfully',
        values : job
    });
});

// Update a job => /api/job/update/:id
exports.updateJob = catchAsyncError( async (req, res, next) => {

    // no need of try-catch if you are using catchAsyncError()
    // try {
    //     if (!ObjectId.isValid(req.params.id)) {
    //         return res.status(400).json({
    //             success: false,
    //             message: 'Invalid job ID format',
    //         });
    //     }
        let job = await Job.findById(req.params.id);
        // console.log(job);
        if (!job) {
            return next(new ErrorHandler("Hello Anand", 404));
            // return res.status(404).json({
            //     success: false,
            //     message: 'Job not found',
            // });
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
    // } catch (error) {
    //     // console.error(error); // Log the error for debugging
    //     res.status(500).json({
    //         success: false,
    //         message: 'An error occurred while updating the job....',
    //     });
    // }
})


// Delete a job from the database => api/job/delete/:id
exports.deleteJob = catchAsyncError( async (req, res, next) => {
    
    // handle ID - error / null /undefined 
    if (!ObjectId.isValid(req.params.id)) {
        return next(new ErrorHandler('Invalid job Anand ID format',400));
        // return res.status(400).json({
        //     success: false,
        //     message: 'Invalid job ID format',
        // });
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
});

// get stats about a topic => api/jobstats/:keyword
// exports.jobStats = async (req, res, next) => {
//     const statics = await Job.aggregate([
//         {
//             $match : {$text : {$search : "\""+req.params.keyword+"\"",}}
//         },
//         {
//             $group : {
//                 _id : null,
//                 avgSalary : {$avg : {$salary}}
//             }
//         }
//     ]);

//     if(statics.length === 0) 
//     {
//         res.status(200).json({ 
//             success : false,
//             message : "No statics found for the keyword "
//         });
//     }
//     res.status(200).json({
//         success : true,
//         data: "HEllo statics"
//     });
// }

/* Question

> waht are these two functions
(req, res, next) => {}
(req, res) => {}
*/