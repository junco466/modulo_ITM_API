const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let flujoSchema = new Schema(

    {

        "time" : Date,
        "sensor": Number,
        "variador": {
            "frecuencia": Number,
            "valorPLC": Number,
        },

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
        collection : "flujo"
    }

);

module.exports = mongoose.model('Flujo', flujoSchema)
