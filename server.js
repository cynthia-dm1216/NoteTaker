//Dependencies
var express = require('express');
var apiRouting = require('./routing/api-routes');
var htmlRouting = require('./routing/html-routes');

//Setting up Note Taker app
var app = express();

//setting a Port to listen to incoming request
var PORT = process.env.PORT || 8080;

// //Setting data for parsing
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',apiRouting);
app.use('/',htmlRouting);



//LISTENER
app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});