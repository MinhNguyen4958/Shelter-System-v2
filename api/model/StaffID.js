const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    id: { type: String },
    sequence_value: { type: Number }
});

const counter = mongoose.model('staffID', counterSchema);
module.exports = counter;