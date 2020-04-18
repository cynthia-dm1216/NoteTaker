let notes = require('./db.json');
const fs = require('fs');

//random values using uuid
const { v4: uuidv4 } = require('uuid');
//for our data for server to store
//ROUTER
//=====================================================

//GET
module.exports = function(app) {
app.get("/api/notes",function(req,res) {
    res.json(notes);
});

//POST
//creating new notes -- taking in json input and a unique value
app.post("/api/notes",function (req,res){
    req.body.id = uuidv4();
    //adding the new notes into the array 
    notes.push(req.body);
    fs.writeFile('./db.json',JSON.stringify(notes),
    function(err){
        if (err) throw err;
    });
    res.json(req.body);
});

//DELETE---------------------------


    //recording new notes
    writeFile();
    return res.send('Your notes have been saved');
}
