const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let enviarSchema = new Schema(

    {

        "presion":{
            "enable":Boolean,
            "modo":String,
            "control":{
                "sp":Number,
                "P":Number,
                "I":Number,
                "D":Number,
                "manual":Number
            }
        },

        "flujo":{
            "enable":Boolean,
            "modo":String,
            "control":{
                "sp":Number,
                "P":Number,
                "I":Number,
                "D":Number,
                "manual":Number
            }
        },
        "nivel":{
            "enable":Boolean,
            "modo":String,
            "control":{
                "sp":Number,
                "P":Number,
                "I":Number,
                "D":Number,
                "manual":Number
            }
        },

        "temperatura":{
            "enable":Boolean,
            "modo":String,
            "control":{
                "sp":Number,
                "P":Number,
                "I":Number,
                "D":Number,
                "manual":Number
            },
        }

    },

    {
        collection : "enviar"
    }

);

module.exports = mongoose.model('Enviar', enviarSchema)
