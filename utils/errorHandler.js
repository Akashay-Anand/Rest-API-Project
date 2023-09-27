class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.construct);
    }

}

module.exports = ErrorHandler;


/*
Error: built-in 'Error' class.

> ErrorHandler will inherit the properties and behavior of the Error class.

> The message parameter is the error message associated with this error, and the statusCode parameter is an additional property that can be used to store an HTTP status code or any other relevant information.

> Within the constructor, super(message) is called. This invokes the constructor of the parent Error class and passes the message parameter to it.

> Error.captureStackTrace(this, this.construct): This line captures the current stack trace for the ErrorHandler instance. The Error.captureStackTrace method is used to include the stack trace of where the error was constructed, which can be helpful for debugging.



*/