const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let tempSchema = new Schema(

    {

        "sensorTemp": Number,
        "sensorNiv": Number,
        "nivMinimo": Boolean,
        "PWM" : Boolean,

        "time" : {
            "fecha": String,
            "hora": String,
        },

        "control": {

            "enable": Boolean,
            "modo": String,
            "sp": Number,
            "P": Number,
            "I": Number,
            "D": Number,
            "manual": Number,

        }

    },

    {
        collection : "temperatura"
    }

);

module.exports = mongoose.model('Temp', tempSchema)
