let notes = require('../db/notesData');
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
        console.log(req.body);
        //adding the new notes into the array 
        notes.push(req.body);
        console.log(notes);
        fs.writeFile('../db/db.json',JSON.stringify(notes),
        function(err){
         if (err) throw err;
        });
        res.json(req.body);
    });

//DELETE---------------------------
 app.delete('/api/notes/:id',function (req,res) {
//identifying what notes to be deleted
let findId = (noteObject) => {
    console.log (noteObject);
    if (noteObject.id != req.params.id) {
        return true
    }else {
        return false
    }
}
notes = notes.filter(findId);
//recording new notes
fs.writeFile('../db/db.json', JSON.stringify(notes),function(err){
    if (err) throw err;
});

res.send('Got a DELETE request at /api/notes/:id')
})
}
