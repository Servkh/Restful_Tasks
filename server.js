var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restful_tasks_New');

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

app.listen(8000, function(){
    console.log('Running on port 8000');
})