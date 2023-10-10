class API_Filters{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    filter(){

        const queryCopy = {...this.queryStr};

        // sort is not a json parameter, so we have to take it out
        const remove = ['sort','field'];
        remove.forEach(element => delete queryCopy[element]);

        // Advance filter usinf lt, lte, gt, gte
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|ltr|in)\b/g, match => `$${match}`); // regExp

        this.query = this.query.find(JSON.parse(queryStr));
        
        return this;
    }

    sort(){
        if(this.queryStr.sort){
            const sortBy = this .queryStr.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort('-postingDate');
        }
        return this;
    }

    onlyFields(){
        if(this.queryStr.field){
            const fields = this .queryStr.field.split(',').join(' ');
            this.query = this.query.select(fields);
        } 
        else{
            this.query = this.query.select('-__v'); // '__v' [Note 01]
        }
        return this;
    }

    // this is also working
    // showFields(){
    //     // console.log(this.query)
    //     if(this.queryStr.field){
    //         // const field = this.queryStr.field.split(',').join(' ');
    //         this.query = this.query.select(this.queryStr.field);
    //         // console.log(this.query)
    //     }
    //     return this;
    // }
}

module.exports = API_Filters;


/*
'__v' = It is typically added by Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.

*/