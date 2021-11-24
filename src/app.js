const express = require('express');
const errors = require('./handlers/errors');
const db = require('./models');
const cors = require('cors');
const router = require('./routes');
const { SERVER_ERROR } = require('./handlers/errors');

const PORT = process.env.PORT || 3003;

const app = express();
console.log(cors())
// app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Authorization, Access-Control-Allow-Headers')
    next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(router);

//error handling
app.use((error, req, res, next) => {
    res.status(error.status ? error.status : SERVER_ERROR )
    .json({
        message : error.message ? error.message : "Oops an error occured",
        details : error.description ? error.description : "It'll be fixed soon"
    })
});

app.listen(PORT,() => {
    console.log('port running on '+ PORT)
    db.sequelize.sync({alter : true}, () => console.log('db connected'))
})