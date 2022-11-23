const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let presionSchema = new Schema(

    {

        sensor: Number,
        sw_presion: Boolean,
        controlPVH: Boolean,
        valv_proporcional: Number,

        time : {

            fecha: String,
            hora: String,

        },

        control: {

            enable: Boolean,
            modo: String,
            sp: Number,
            P: Number,
            I: Number,
            D: Number,
            manual: String,

        }

    },

    {
        collection : "presion"
    }

);

module.exports = mongoose.model('Presion', presionSchema)
