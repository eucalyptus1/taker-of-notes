const express = require('express');

const app = express();

const { db } = require('./db/db');


app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(notes);
  });

app.listen(3000, () => {
    console.log(`API server now on port 3001!`);
  });