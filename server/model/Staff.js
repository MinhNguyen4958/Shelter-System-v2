const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: {type: String, required: true},  
    id: {type: Number, required: true}, 
    position: {type: String, required: true}     
});

const staff = mongoose.model('staff', staffSchema);
module.exports = staff;