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
