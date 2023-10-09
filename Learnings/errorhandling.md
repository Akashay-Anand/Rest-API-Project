# Error

> JavaScript has a built in error object that provides error information when an error occurs.

> The error object provides two useful properties: name and message.

```bash
// Error Object Properties

Property	Description
name	    Sets or returns an error name
message	    Sets or returns an error message (a string)
```

> We have files namely errorhandler.js and errors.js lets see what's going on there

- first we created an object of errorhandler.js in jobController.js file 
``` js
const ErrorHandler = require('../utils/errorHandler');

// 
if (!job || job.length === 0) {
    return next(new ErrorHandler('Job not found', 404));
}

```

////////////////////////////////////////////////////////////////////////////////

## Types of error to handle

### uncaught exceptions
```js

process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log(`closing due to uncaught exception`);
    process.exit(1);  
})

console.log(xyz) // 'xyz' is not define so this will create uncaughtException. ; this is handaled above
```

### handle unhandled promises rejection
```js

process.on('unhandledRejection',err=>{
    console.log('Error: ' + err.message);
    console.log(`shutting down the server`);
    live.close(()=>{
        process.exit(1);
    })
});

```

## errors while working with MongoDB

### if id is not in correct format ( castError )

```js
// Error: Cast to ObjectId failed for value
if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
        success: false,
        message: 'Invalid job ID format',
    });
}

// this error can also be handled through async error handler function

```