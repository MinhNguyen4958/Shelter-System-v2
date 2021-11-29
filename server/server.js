'use strict';

// Load packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");


//import the models
const Staff = require('./model/Staff');
const Customer = require('./model/Customer');
const staff_position = require('./model/staff-position');
const Room = require('./model/staff-position');

const port = 8080;

// Parses incoming request bodies
app.use(bodyParser.json({extended:true}));


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


//---------------- Staff methods ----------------//

// creating a staff member
app.post('/addStaff', (req, res) => {
    let name = req.body.name;
    let position = req.body.position;
    let id = Math.floor(Math.random() * 100) + 1; // for now I will generate a random number for ID

    const newStaff = new Staff({
        name: name,
        position: position,
        id: id
    });

    newStaff.save()
    .then(result => {
        res.send(JSON.stringify("Add staff complete!"));
    })
    .catch(err => { 
        throwError(err);
    });
})

app.get('/employeeList', (req, res) => {
    Staff.find()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        throwError(err);
    });
});



app.get('/positionList', (req, res) => {
    staff_position.find()
    .then(result => {
        res.send(JSON.stringify(result));
    })
    .catch(err => {
        throwError(err);
    })
})




























app.use("/", express.static("/app/src/pages"));
app.get("/", (req, res) => {
    res.redirect("/home.html");
});
