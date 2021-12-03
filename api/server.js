'use strict';

// Load packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

//import the models
const Staff = require('./model/Staff');
const Customer = require('./model/Customer');
const Position = require('./model/staff-position');
const Room = require('./model/rooms');
const StaffID = require('./model/StaffID');
const CustomerID = require('./model/CustomerID');

const port = 8080;

// Parses incoming request bodies
app.use(bodyParser.json({extended:true}));

app.use(cors());

const throwError = error => {
    console.error(error);
}

const shelterURL = "mongodb+srv://admin:admin@shelter.yqqc6.mongodb.net/shelter?retryWrites=true&w=majority";
mongoose.connect(shelterURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    console.log("Connected to shelter database");
    app.listen(port, () => {
        console.log("Server listening on http://localhost:" + port);
    })
})
.catch(error => throwError(error));

//---------------- Staff ----------------//

// creating a staff member
app.post('/addStaff', (req, res) => {

    const filter = { id: "staffid" };
    const increment = { $inc : { sequence_value: 1 } };
    StaffID.findOneAndUpdate(filter, increment, {new: true })
    .then(result => {
        const newStaff = new Staff({
            name: req.body.name,
            position: req.body.position,
     // for now I will generate a random number for ID
            id: result.sequence_value
        });
    
        newStaff.save()
        .then(result => {
            res.send(JSON.stringify("Add staff complete!"));
        })
        .catch(err => { 
            throwError(err);
        });
     })
    .catch(err => throwError(err));


})

// a post method to update a staff's new position
app.post('/updateStaff', (req, res) => {
    const filter = {id: req.body.id}; // filter to find the document with matching id
    const updatePosition = {$set: { position: req.body.position }}; // replace with the new position
    Staff.updateOne(filter, updatePosition, err => {
        if (err) throwError(err);
        res.send(JSON.stringify("Update Complete!"));
    })
});

// a post method to delete a staff from staff table when staff's id is given
app.post('/deleteStaff', (req, res) => {
    const filter = { id: req.body.deleteStaffID };
    Staff.deleteOne(filter, err => {
        if (err) throwError(err);
        res.send(JSON.stringify("Delete Success!"));
    });
});

// a post method to retrieve a staff members info
app.post('/staffInfo', (req, res) => {
    const filter = { id: req.body.id };
    Staff.findOne(filter)
    .then(result => {
        if (result != null) {
            let info = {
                name: result.name,
                id: result.id,
                position: result.position
            }
            res.send(JSON.stringify(info));
        }
    })
    .catch(err => throwError(err));
});

// a get method to send a list of employees and their IDs
app.get('/employeeList', (req, res) => {
    Staff.find()
    .then(result => {
        let nameIDs = [];
        Object.keys(result).forEach(key => {
            let row = result[key];
            let nameID = {
                name: row.name,
                id: row.id
            }
            nameIDs.push(nameID);
        });
        res.send(JSON.stringify(nameIDs));
    })
    .catch(err => {
        throwError(err);
    });
});


// a get method to send a list of staff positions
app.get('/positionList', (req, res) => {
    Position.find()
    .then(result => {
        res.send(JSON.stringify(result));
    })
    .catch(err => {
        throwError(err);
    })
})


//------------------------ Customers ------------------------//
// a post method to add a new customer 
app.post('/addCustomer', (req, res) => {
    const name = req.body.name;
    const room_num = req.body.room_num;
    const check_in = Date.now();
    const log = req.body.log;

    let filter = { id: "customerid" };
    const increment = { $inc : { sequence_value: 1 } };
    CustomerID.findOneAndUpdate(filter, increment, { new: true })
    .then(result => {
        const id = result.sequence_value;
        const newRoom = new Customer({
            name: name,
            id: id,
            room_num: room_num,
            check_in: check_in,
            check_out: null,
            log: `\nNew Entry: ${log}`,
        });

        // add the new customer to customers collection
        newRoom.save()
        .catch(err => {
            throwError(err)
        });

        // add the customer's id to rooms collection
        filter = { room_num: room_num }
        const updateRoom = { $set: { id: id }};

        Room.updateOne(filter, updateRoom, err => {
            if (err) throwError(err);
        })
    })
    res.send(JSON.stringify("Request complete!"));
});


// a post method to update customers to a new room
app.post('/updateCustomers', (req, res) => {
    let customerID = req.body.id;
    let newRoom = req.body.newRoom;
    let newLog = req.body.log;

    if (newRoom != null) {
        // update the current room to 0 first
        let filter = { id: customerID };
        const deleteRoom = { $set: { id: 0 } };
        Room.updateOne(filter, deleteRoom, err => {
            if (err) throwError(err);
        });

        // add the customer ID to the new room
        filter = { room_num: newRoom };
        const updateID = { $set: { id: customerID } };
        Room.updateOne(filter, updateID, err => {
            if (err) throwError(err);
        });

        // then update the new room_num in the customers collection
        filter = { id: customerID };
        const updatenewRoom = { $set: { room_num: newRoom } };
        Customer.updateOne(filter, updatenewRoom, err => {
            if (err) throwError(err);
        });
    }

    // add a new log to the customer
    if (newLog != null) {
        const filter  = { id: customerID };
        Customer.findOne(filter)
        .then(result => {
            let log = result.log + `\nNew Entry: ${newLog}`;
            const addLog = { $set : {log: log } };

            Customer.updateOne(filter, addLog, err => {
                if (err) throwError(err);
            })
        })
    }
    res.send(JSON.stringify("Request Complete."));
});

// a post method to delete a given customer
app.post('/deleteCustomers', (req, res) => {
    let deleteID = req.body.deleteCustomerID;
    const filter = { id: deleteID };
    const deleteRoom = { $set: { id: 0 } };
    Room.updateOne(filter, deleteRoom, err => {
        if (err) throwError(err);
    })

    Customer.deleteOne(filter, err => {
        if (err) throwError(err);
    })
    res.send(JSON.stringify("Request Complete"));
});

// a post method to checkout a customer
app.post('/checkoutCustomer', (req, res) => {
    let id = req.body.id;
    let filter = { id: id };
    const check_out = { $set: { check_out: Date.now(), room_num: null } };
    let roomNum;
    Customer.findOne(filter)
    .then(result => {
        roomNum = result.room_num; // get the room number to update in rooms collection
        Customer.updateOne(filter, check_out, err => {
            if (err) throwError(err);
        });
        filter = { room_num: roomNum };
        const deleteRoomID = { $set: { id: 0 } };
    
        Room.updateOne(filter, deleteRoomID, err => {
            if (err) throwError(err);
        });
        res.send(JSON.stringify("Checkout complete"));
    })
    .catch(err => throwError(err));
});

// a post method to retrieve a customer's info
app.post('/customerInfo', (req, res) => {
    let id = req.body.id;
    const filter = { id: id };
    Customer.findOne(filter)
    .then(result => {
        if (result != null) {
            let info = {
                name: result.name,
                id: result.id,
                room_num: result.room_num,
                check_in: result.check_in,
                check_out: result.check_out,
                log: result.log
            }
            res.send(JSON.stringify(info));
        }
    })
    .catch(err => {
        throwError(err);
    });
});

// a get method to send a list of customers and their IDs
app.get('/customerList', (req, res) => {
    Customer.find()
    .then(result => {
        let nameIDs = [];
        Object.keys(result).forEach(key => {
            let row = result[key];
            let nameID = {
                name: row.name,
                id: row.id
            }
            nameIDs.push(nameID);
        });
        res.send(JSON.stringify(nameIDs));
    })
    .catch(err => {
        throwError(err);
    });
});

// a get method to return a list of available rooms
app.get('/roomList', (req, res) => {
    let filter = { id: 0 };
    Room.find(filter).sort( { room_num: 1}) // 1 is ascending order
    .then(result => {
        let rooms = [];
        Object.keys(result).forEach(key => {
            let room = result[key].room_num;
            rooms.push(room);
        })
        res.send(JSON.stringify(rooms));
    })
});


// app.use("/", express.static("/app/src/pages"));
// app.get("/", (req, res) => {
//     res.redirect("/home.html");
// });
