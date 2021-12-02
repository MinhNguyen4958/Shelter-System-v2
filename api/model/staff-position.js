const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the structure of the document

const positionSchema = new Schema({
    position: {type: String}
});

// create a model communicating with the staff-position collection
const positions = mongoose.model('staff-position', positionSchema);
module.exports = positions;