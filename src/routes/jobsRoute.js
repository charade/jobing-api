const router = require('express').Router();

router.get('/auth',(req, res, next) => {
    //get connected user jobs
})
router.post('/auth/new-job', (req,res,next) => {
    //add a new job
});
router.delete('/auth/:jobId', (req, res, next) => {
    //delete a job
})
router.patch('/auth/:jobId', (req, res, next) => {
    //update a job
})

module.exports = router;