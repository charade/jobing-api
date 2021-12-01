const { users, timeline, jobs } = require('../models');
const { password } = require('../utils');

const {
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
} = require('../handlers/exceptions');

module.exports = {
    //create
    signUp: async(data) => {
        const { email, pass, name } = data;
        //before create check if email available
        const user = await users.findOne({ where : { email } });

        if(user){
            return({error : new ForbiddenError("Cet email existe déjà")})
        };
        const hash = await password.hash(pass);
        return users.create({ email, pass: hash, name })
    },
    /******************************************************************************* */
    login: async(data) => {
        const { email, pass } = data;
        const user = await users.findOne({ where : { email } }).catch(error => console.log(error));
        
        if(user){

            const passCheck = await password.verify(pass, user.pass);
            if(passCheck){
                return { id : user.id }
            }
            return { error : new UnauthorizedError('mot de passe incorrect') };
        }
        return {error: new NotFoundError('Utilisateur non trouvé')};
    },
    /******************************************************************************* */
    getUser : async(id) => {
        let user = await users.findOne({
            where : {id},
            attributes : {exclude : "password"},
            include : [{
                as : "timeline",
                model : timeline,
            },
            {
                as: "jobs",
                model: jobs,
                attributes : { exclude: "userId" }
            }
        ]
        });
        return user;
    },
    /******************************************************************************* */
    update: async(data,id) => {
        const condition = { where : {id} }
        const response = await users.update({...data}, condition);
        return response;
    }
}