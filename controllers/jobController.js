
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