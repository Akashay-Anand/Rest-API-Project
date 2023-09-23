
// get all job listings => 'api/jobslist'
exports.getJoblist = (req,res,next) => {
    res.status(200).json({
        sucess: true,
        message : 'route is working'
    })
}