const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const { db } = require('./db/db');


app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(notes);
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });