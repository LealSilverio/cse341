const express = require('express');
const bodyParser = require('body-parser');
const { connectToDb, getDb } = require('./database/db');
const port = process.env.port || 8080;

// init app
const app = express();
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

//connect to the database
let db; 

connectToDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Web Server is listening at port ${port}`);
    db = getDb();
  }
});

// Routes
app.use('/', require('./routes/index')); // index route
app.use('/professional', require('./routes/professional')); // professional route
