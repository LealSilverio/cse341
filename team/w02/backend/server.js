const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Routes
app.use('/', require('./routes/index'));

app.listen(port);
console.log(`Web Server is listening at port ${port}`);