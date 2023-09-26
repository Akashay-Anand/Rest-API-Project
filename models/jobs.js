const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const {jobSchema} = require('./Schemas');

// creating job Slug before savinf
// why not arrow function: have to use this keyword.
jobSchema.pre('save', function(next) {
    // creating slug 
    this.slug = slugify(this.title, {lower: true});

    next();
})

module.exports = mongoose.model('Job',jobSchema);