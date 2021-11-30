const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalsSchema = new Schema({
    species:{
        name: String,
    }

});

const Animals = mongoose.model("Animals", AnimalsSchema)

module.exports = Animals;