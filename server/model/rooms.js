const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the structure of the document
const roomSchema = new Schema({
    room_num: {type: Number},
    id: {type: Number}
})

// create a model communicating with rooms collection
const room = mongoose.model('room', roomSchema);
module.exports = room;