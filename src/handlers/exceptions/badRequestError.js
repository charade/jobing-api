const { BAD_REQUEST } = require('../errors');

module.exports = class BadRequestError extends Error{
    constructor(description, ...params){
        super(params);
        this.message = "bad entry";
        this.description = description;
        this.status = BAD_REQUEST;
        if(this.captureStackTrace){
            this.captureStackTrace(this, BadRequestError)
        }
    }
}