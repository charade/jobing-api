const router = require('express').Router();
const controller = require('../controllers/userController');
const { authentication } = require('../utils');
const { BadRequestError } = require('../handlers/exceptions');
const validator = require('../handlers/validators');
const userController = require('../controllers/userController');

/********************* Signup ********************************* */
router.post('/sign-up', async(req, res, next) => {
    //email handling
    const errors = validator(req.body);
    if(errors.length){
        next(new BadRequestError(errors));
        return;
    };
    const response = await controller.signUp(req.body);
    if(response.error){
        next(response.error);
        return;
    }
    res.status(200).json({message : "user created"})
});
/********************** Login ********************************** */
router.post('/login', async (req, res, next) => {
    const user = await controller.login(req.body);
    
    if(user.error){
        next(user.error);
        return;
    }
    const token = await authentication.generate(user);
    res.status(200).json(token);
});
/******************** Get user infos **************************** */
router.get('/auth', async(req, res, next) => {
    const { id } = req;
    const user = await userController.getUser(id);
    res.status(200).json(user)
});
/*************************** Update user infos ****************** */
router.patch('/auth/update', async(req, res, next) => {
    //update user
    const {id} = req
    const response = await controller.update(req.body, id);
    res.status(200).json(response)
});
module.exports = router;