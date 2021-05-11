const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const enemySchema = new Schema({
    name: String,
    color: String
});

module.exports = mongoose.model('Enemy', enemySchema);