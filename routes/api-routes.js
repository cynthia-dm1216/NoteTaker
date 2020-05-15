const newNotes = require('../db/newNotes');
// const app = require('express').app();

// const util = require('util');
// const fs = require('fs');

// //random values using uuid
// const { v4: uuidv4 } = require('uuid');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

//read function
// function read() {
//     return readFileAsync('db/notes.json', 'utf8');
// }

// //write function
// function write(note) {
//     return writeFileAsync('./db/db.json',JSON.stringify(note));
// }

module.exports = function(app){
//GET
    app.get("/api/notes",(req,res) => {
      newNotes
      .getNotes()
      .then(notes => res.json(notes))
    //   .then(notes => console.log(notes))
      .catch(err => res.status(500).json(err));
    });

    //POST
    //creating new notes -- taking in json input and a unique value
  app.post('/api/notes', (req,res) => {
      console.log(req.body);
      newNotes
    //   note.push(req.body);
      .write(req.body)
      .then(res.status(200).json('New Note was added'))
      .catch(err => res.status(500).json(err));
  });

//DELETE---------------------------
app.delete("/notes/:id", function(req, res) {
    newNotes
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  
}

