const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongodb = require('./db/database');

// Routes
app.use('/', require('./routes/index'));

// Database Connection
mongodb.connectToDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Web Server is listening at port ${port}`);
      db = mongodb.getDb();
    }
});