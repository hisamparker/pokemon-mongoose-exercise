const express = require('express');
const mongoose = require('mongoose');
const Enemy = require('./models/Enemy.model');
const Pokemon = require('./models/Pokemon.model');

const app = express();

mongoose.connect('mongodb://localhost:27017/pokemon', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(db => console.log(`Connected to mongo database name: "${db.connections[0].name}"`))
.then(Enemy.create({name: 'hat', color: 'brown'})
    .then(dbEnemy => {
        return Pokemon.findOneAndUpdate({name : 'pikachu'}, { $push: { enemies: dbEnemy._id } });
    })
)
.catch(err => {
        console.error('Error connecting to mongo', err);
});

