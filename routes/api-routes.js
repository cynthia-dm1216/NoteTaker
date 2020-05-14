const db = require('../db/notes.json');
const util = require('util');
const fs = require('fs');

//random values using uuid
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//read function
function read() {
    return readFileAsync('db/notes.json', 'utf8');
}

//write function
function write(note) {
    return writeFileAsync('./db/db.json',JSON.stringify(note));
}

//GET
module.exports = function(app) {

    app.get("/api/notes",function(req,res) {
        read()
        .then(notes => res.json(JSON.parse(notes)))
        .catch(err => res.status(500).json(err));
    });

    //POST
    //creating new notes -- taking in json input and a unique value
  app.post('/api/notes', (req,res) => {
      req.body.id = uuidv4 ();
      db.push(req.body);
      write()
      .then(res.status(200).json('New Note was added'))
      .catch(err => res.status(500).json(err));
  });

//DELETE---------------------------
app.delete('/notes/:id', (req,res) => {
    const deleteNote = req.params.id;
    for (let i = 0; i < note.length; i++) {
        let notes = db[i];
        if(notes.id === deleteNote) {
            db.splice(i,1);
        }
    }
    write(note)
    .then(res.status(200).json('Note was deleted'))
      .catch(err => res.status(500).json(err));
})
}
