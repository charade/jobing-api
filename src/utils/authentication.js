require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../handlers/exceptions');

module.exports =  {
    verify : async(request, response, next) =>{
        try{
            const { headers } = request;
            const token = headers.authorization.split(' ')[1];
            const user = await jwt.verify(token, process.env.SECRET);
            if(Date.now() > user.expiresIn){
                next(new UnauthorizedError("jeton d'authentification expiré"));
                return;
            }
            request.id = user.id;
            next();
        }
        catch{
            next(new UnauthorizedError('invalid authentication token'));
        }
    },
    //token valid for 1 day
    generate : (user) => jwt.sign({...user, expiresIn : Date.now() + 60 * 60 * 24 * 1000}, process.env.SECRET)
}