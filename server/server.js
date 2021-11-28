'use strict';

// Load packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");


//import the models
const Staff = require('./model/Staff');
const Customer = require('./model/Customer');

const port = 8080;
const throwError = error => {
    console.error(error);
}


const shelterURL = "mongodb+srv://admin:admin@shelter.yqqc6.mongodb.net/shelter?retryWrites=true&w=majority";
mongoose.connect(shelterURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    console.log("connected to shelter database");
    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port);
    })
})
.catch(error => throwError(error));






























app.use("/", express.static("/app/src/pages"));
app.get("/", (req, res) => {
    res.redirect("/home.html");
});
