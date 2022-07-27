const express = require('express');
const path = require('path');
const { c_middle } = require('./fancy-Middlewares/middlewares');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 80;

const app = express();

// Import custom middleware, "cLog"
app.use(c_middle);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// GET Route for landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
