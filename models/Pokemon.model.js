const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const Enemy = require('./Enemy.model');

const pokemonSchema = new Schema({
    name: String,
    enemies: [{ type: Schema.Types.ObjectId, ref: 'Enemy' }]
});

module.exports = mongoose.model('Pokemon', pokemonSchema);