const { jobs } = require('../models');
const { BadRequestError } = require('../handlers/exceptions');

module.exports = {
    add : async(data) =>{
        //check if offer already been saved
        console.log(data)
        const job = await jobs.findOne({ where : { offerLink : data.offerLink }});
        if(job){
            return { error : new BadRequestError('cette offre est déjà enregistrée') }
        }
        return jobs.create(data);
    } 
}