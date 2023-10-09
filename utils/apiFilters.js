class API_Filters{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    filter(){

        const queryCopy = {...this.queryStr};

        // Advance filter usinf lt, lte, gt, gte
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|ltr|in)\b/g, match => `$${match}`); // regExp

        this.query = this.query.find(JSON.parse(queryStr));
        
        return this;
    }
}

module.exports = API_Filters;