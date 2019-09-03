const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');

import user from "./routes/user";
import offre from "./routes/offre";

// Connect To Database
mongoose.connect(config.database, {
  
  /* other options */
});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();


// Port Number
const port = process.env.PORT || 6000;

// CORS Middleware
app.use(cors());


// Body Parser Middleware
app.use(bodyParser.json());


app.use(user);
app.use(offre);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});


