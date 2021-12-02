const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the structure of the document
const staffSchema = new Schema({
    name: {type: String, required: true},  
    id: {type: Number, required: true}, 
    position: {type: String, required: true}     
});

// create a model communicating with the staff collection
const staff = mongoose.model('staff', staffSchema);
module.exports = staff;