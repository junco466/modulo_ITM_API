const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let nivelSchema = new Schema(

    {

        "sensor": Number,
        "time" : {
            "fecha": String,
            "hora": String,
        },
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
            "manual": Number,
        }

    },
    {
        collection : "nivel"
    }

);

module.exports = mongoose.model('Nivel', nivelSchema)
