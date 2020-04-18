//Dependencies
var bodyParser = require('body-parser');
var express = require('express');

//Setting up Note Taker app
var app = express();

//setting a Port to listen to incoming request
var PORT = process.env.PORT || 8080;

// //Setting data for parsing
 app.use(express.static('public'));
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(bodyParser.urlencoded({extended: false}));

 //parse application JSON
 app.use(bodyParser.json());

//Routes
//===========================================
require("./routing/html-routes.js")(app);
require("./routing/api-routes")(app);

//LISTENER
app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});