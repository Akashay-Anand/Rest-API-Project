module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    err.message = err.message || 'something wrong'

    res.status(err.statusCode).json({
        success: fase,
        message: err.message
    });
}