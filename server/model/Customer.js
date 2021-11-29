const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define the structure of the document
const customerSchema = new Schema({
    name: {type: String, required: true}, 
    id: {type: Number, required: true},
    room_num: {type: Number, required: true},
    check_in: {type: Date, required: true},
    check_out: {type: Date},
    log: {type: String}
});

// create a model communicating with the customers collection
const customers = mongoose.model('customer', customerSchema);
module.exports = customers;