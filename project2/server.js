const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

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