const { notes } = require('../../db/db');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(notes);
  });

  router.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
      res.json(result);
  });

  router.post('/api/notes', (req, res) => {
    
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
  });

  module.exports  = router;