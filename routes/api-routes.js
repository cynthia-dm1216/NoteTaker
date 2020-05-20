const newNotes = require('../db/newNotes');

module.exports = function(app){
//GET
    app.get("/api/notes",(req,res) => {
      newNotes
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
    });

    //POST
    //creating new notes -- taking in json input and a unique value
  app.post('/api/notes', (req,res) => {
      console.log(req.body);
      newNotes
    //   note.push(req.body);
      .addNote(req.body)
      .then(res.status(200).json('New Note was added'))
      .catch(err => res.status(500).json(err));
  });

//DELETE---------------------------
app.delete("/notes/:id", function(req, res) {
    newNotes
      .removeNote(req.params.id)
      console.log(req.params)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  
}

