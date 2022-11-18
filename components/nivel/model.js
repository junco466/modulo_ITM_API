const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let nivelSchema = new Schema(

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
        collection : "nivel"
    }

);

module.exports = mongoose.model('Nivel', nivelSchema)
