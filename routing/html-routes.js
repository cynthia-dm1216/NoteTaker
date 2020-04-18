//help direct user when they click on link
var path = require("path");

module.exports = function (app) {
    // when we excute this root send user a file 
   app.get("*", function(req,res) {
       res.sendFile(path.join(__dirname + "./public/index.html"));
   });

   app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname + "./public/notes.html"));
});

};