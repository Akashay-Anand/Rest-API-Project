class API_Filters{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    filter(){

        const queryCopy = {...this.queryStr};

        // sort is not a json parameter, so we have to take it out
        const remove = ['sort','field','q','limit','page'];
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

    searchbyQuery(){
        if(this.queryStr.q){
            const qu = this.queryStr.q.split('-').join(' ');
            this.query = this.query.find({$text: {$search: "\"" + qu +"\""}});
        }
        return this;
    }

    // paginations : ristrict how mayny items would be shown per pages

    paginations(){
       const page = parseInt(this.queryStr.page , 10) || 1;
       const limit = parseInt(this.queryStr.limit , 10) || 10;

       const skipResults = (page-1) * limit;

        this.query = this.query.skip(skipResults).limit(limit);

        return this;
    }
}

module.exports = API_Filters;


/*
'__v' = It is typically added by Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.

*/