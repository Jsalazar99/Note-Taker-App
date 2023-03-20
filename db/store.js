const util = require('util');
const fs = require('fs');

// import UUID NPM package here
const uuid = require('uuid');
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// class for Store object 
class Store {
    read() {
      return readFileAsync('db/db.json','utf8');
    }
    write(note) {
      return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    getNotes() {
      return this.read().then((notes) => {
        let parsedNotes;
        // try catch statement for error handling 
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
        return parsedNotes;
      });
    }
  
    postNote(note) {
      const { title, text } = note;
  
      if (!title || !text) {
        throw new Error("Please enter text");
      }
  
      const newNoteID = { title, text, id: uuid };
      // get newNoteID and update note items 
      return this.getNotes()
        .then((notes) => {
            return [...notes, newNoteID];
    })
        .then((updateNotes) => {
            return this.write(updateNotes);
        })
        .then(() => {
           return (newNoteID);
    });
}
  
    deleteNote(id) {
      // Delete note items 
      return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }
  };
  // export the Store file
  module.exports = new Store();



 