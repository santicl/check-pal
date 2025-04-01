const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationsSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    details: {
        type: Array,
        require: true
    },
    typeService: {
        type: String,
        require: true
    },
    priceService: {
        type: String,
        require: true
    },
    priceForPerson: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    fileName: {
        type: String,
        require: true
    },
    hostelId: {
        type: String,
        requiere: true
    },
    isActive: {
        type: Boolean,
        require: true,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('reservations', reservationsSchema);