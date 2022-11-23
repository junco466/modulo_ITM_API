const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let presionSchema = new Schema(

    {

        payload:{

            time: Date,
            sensor: Number,
            sw_presion: Boolean,
            controlPVH: Boolean,
            valv_proporcional: Number,

            control: {

                enable: Boolean,
                modo: String,
                sp: Number,
                P: Number,
                I: Number,
                D: Number,
                manual: String,

            }
        }

    },

    {
        collection : "presion"
    }

);

module.exports = mongoose.model('Presion', presionSchema)
