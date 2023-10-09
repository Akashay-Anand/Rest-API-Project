class API_Filters{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    filter(){

        const queryCopy = {...this.queryStr};

        // sort is not a json parameter, so we have to take it out
        const remove = ['sort'];
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
}

module.exports = API_Filters;