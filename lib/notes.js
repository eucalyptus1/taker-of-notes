
const fs = require("fs");
const path = require("path");

function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}


function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ note: noteArray }, null, 2)
    );
  
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
      return false;
    }
    if (!note.link || typeof note.link !== 'string') {
      return false;
    }
  
    return true;
}

module.exports = {
    findById,
    createNewNote,
    validateNote
  };