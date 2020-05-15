const util = require("util");
const fs = require("fs");

//random values using uuid
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class newNotes {
  read() {
    return readFileAsync("db/notes.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/notes.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then(notes => {
      let readNotes;

      try {
        readNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        readNotes = [];
      }

      return readNotes;
    });
  }

//   addNote(note) {
//     const { title, text } = note;

//     if (!title || !text) {
//       throw new Error("Note 'title' and 'text' cannot be blank");
//     }

//     // Add a unique id to the note using uuid package
//     const newNote = { title, text, id: uuidv1() };

//     // Get all notes, add the new note, write all the updated notes, return the newNote
//     return this.getNotes()
//       .then(notes => [...notes, newNote])
//       .then(updatedNotes => this.write(updatedNotes))
//       .then(() => newNote);
//   }

  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== id))
      .then(filteredNotes => this.write(filteredNotes));
  }
}

module.exports = new newNotes();