const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let tempSchema = new Schema(

    {

        "time" : Date,
        "sensorTemp": Number,
        "sensorNiv": Number,
        "PWM" : Boolean,

        "control": {

            "enable": Boolean,
            "modo": String,
            "sp": Number,
            "P": Number,
            "I": Number,
            "D": Number,
            "manual": String,

        }

    },

    {
        collection : "temperatura"
    }

);

module.exports = mongoose.model('Temp', tempSchema)
