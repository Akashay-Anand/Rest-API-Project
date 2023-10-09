module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === 'production'){
        let error = {...err}; // [Note - 01]
        error.message = err.message;

        // Mongo ID error ; 
        if(error.name === 'CastError'){
            res.status(error.statusCode).json({
                success: false,
                message: errr.message
            })
        }

        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Something went wrong with server in production'
        })
        
    }
    else if(process.env.NODE_ENV === 'development'){
        res.status(err.statusCode).json({
            env: 'development',
            message: false,
            error: err,
            errMessage: err.message,
            stack : err.stack
        } )
        
    }else{
        err.message = err.message || 'something wrong'
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }
}


/*
[Note 01]: The code let error = {...err} creates a new JavaScript object called error that is a shallow copy of the existing object err. This means that all of the properties of err will be copied into error, but the values of those properties will not be copied recursively(if any of the properties of the object err are objects themselves, then the values of those object properties will not be copied into the object error. Instead, the object error will reference the same object properties as the object err.).




*/