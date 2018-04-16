const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create app
const app = express();
mongoose.connect('mongodb://localhost:27017/phonebookApiTut');

// middleware
app.use(express.static('public')); // localhost:3000
app.use(bodyParser.json()); // parse data e.g body sent
app.use('/api', require('./routes/api'));

// this is the next middleware after routes if there is an error
app.use((err, req, res, next) => {
    // console.log(err);
    res.status(422).send({error : err.message});
});

// set up port 
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});