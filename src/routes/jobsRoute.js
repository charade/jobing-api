const router = require('express').Router();
const job = require('../controllers/jobsController');

router.get('/auth',(req, res, next) => {
    //get connected user jobs
})
//add a new offer
router.post('/auth', async(req,res,next) => {
    const { id } = req;
    req.body.userId = id;
    const response = await job.add(req.body);
    if(response.error){
        next(response.error);
        return;
    }
    res.status(201).json(response);
    //add a new job
});
router.delete('/auth/:jobId', (req, res, next) => {
    //delete a job
})
router.patch('/auth/:jobId', (req, res, next) => {
    //update a job
})

module.exports = router;