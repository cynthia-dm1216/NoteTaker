//Dependencies
var express = require('express');
var path = require ('path');
var fs = require('fs');

//Setting up Note Taker app
var app = express();
//setting a Port to listen to incoming request
var PORT = process.env.PORT || 3000;


// //Setting data for parsing
// app.use(express.static(__dirname + '/public'));
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));


//ROUTER
//======================================================
app.get("/", function(req, res){
    res.sendFile(path.join)
})



//LISTENER
app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});