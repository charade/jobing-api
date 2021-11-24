const { FORBIDDEN } = require('../errors');

module.exports = class ForbiddenError extends Error{
    constructor(description, ...params){
        super(params);
        this.message = "authorization required";
        this.description = description;
        this.status = FORBIDDEN;
        if(this.captureStackTrace){
            this.captureStackTrace(this, ForbiddenError)
        }
    }
}