const { NOT_FOUND } = require('../errors');

module.exports = class NotFoundError extends Error{
    constructor(description, ...params){
        super(params);
        this.message = "Ressource doesn't exist";
        this.description = description;
        this.status = NOT_FOUND;
        
        if(this.captureStackTrace){
            this.captureStackTrace(this, NotFoundError )
        }
    }
}