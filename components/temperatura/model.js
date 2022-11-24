const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let tempSchema = new Schema(

    {

        "sensorTemp": Number,
        "sensorNiv": Number,
        "PWM" : Boolean,

        "time" : {
            "fecha": String,
            "hora": String,
        },

        "control": {

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
