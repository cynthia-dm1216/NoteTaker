//Dependencies
var express = require('express');
var moongoose = require('moongoose');

//deploy to heroku
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/notetaker';

//connect to Mongo DB
moongoose.connect(MONGODB_URI);

//Setting up Note Taker app
var app = express();

//setting a Port to listen to incoming request
var PORT = process.env.PORT || 8080;

// //Setting data for parsing
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('/api',apiRouting);
// app.use('/',htmlRouting);

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//LISTENER
app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});