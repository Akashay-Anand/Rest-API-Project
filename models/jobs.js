const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please enter Job title.'],
        trim : true,
        maxlength : [255, 'Job title can not exceed 255 characters.']
    },
    description : {
        type : String,
        required : [true, 'Please enter Job description.'],
        maxlength : [2500, 'Job description can not exceed 2500 characters.']
    },
    company : {
        type : String,
        required : [true, 'Please add Company name.']
    },
    email : {
        type : String,
        validate : [validator.isEmail, 'Please add a valid email address.']
    },
    address : {
        type : String,
        required : [true, 'Please add an address.']
    },
    industry : {
        type : [String], //can take multiple values
        required : [true , 'Please enter industry for this job.'],
        enum : {
            values : [
                'Business',
                'Information Technology',
                'Banking',
                'Education/Training',
                'Telecommunication',
                'Others'
            ],
            message : 'Please select correct options for industry.'
        }
    },
    jobType : {
        type : String,
        required : [true, 'Please enter job type.'],
        enum : {
            values : [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message : 'Please select correct options for job type.'
        }
    },
    jobMode : {
        type : String,
        required : [true, 'Please enter job mode.'],
        enum : {
            values : [
                'Remote/WFH',
                'Hybrid',
                'On Site'
            ],
            message: 'Please select correct options for job mode.'
        },
    },
    minEducation : {
        type : String,
        required : [true, 'Please enter minimum education for this job.'],
        enum : {
            values : [
                'Bachelors',
                'Masters',
                'Phd',
                'No-degree/Experience'
            ],
            message : 'Please select correct options for Education.'
        }
    },
    vacancies : {
        type : Number,
        default : 1
    },
    experience : {
        type : String,
        required : [true, 'Please enter experience required for this job.'],
        enum : {
            values : [
                'No Experience',
                '1 Year - 2 Years',
                '2 Year - 5 Years',
                '5 Years+'
            ],
            message : 'Please select correct options for Experience.'
        }
    },
    salary : {
        type : Number,
        required : [true, 'Please enter expected salary for this job.']
    },
    postingDate : {
        type : Date,
        default : Date.now
    },
    lastDate : {
        type : Date,
        default : new Date().setDate(new Date().getDate() + 5)
    },


});


module.exports = mongoose.model('Job',jobSchema);