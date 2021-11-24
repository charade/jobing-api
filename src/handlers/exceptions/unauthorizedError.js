const { UNAUTHORIZED } = require('../errors');

module.exports = class UnauthorizedError extends Error{
    constructor(description, ...params){
        super(params);
        this.message = "authentication failed";
        this.description = description;
        this.status= UNAUTHORIZED;
        
        if(this.captureStackTrace){
            this.captureStackTrace(this, UnauthorizedError)
        }
    }
}