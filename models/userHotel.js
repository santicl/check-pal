const mongoose = require('mongoose');
const { Schema } = mongoose;

const userHostelSchema = new Schema({
    nameHostel: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cellphone: {
        type: Number
    },
    location: {
        type: String
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
    typeBusiness: {
        type: String
    },
    hostelSizeWorker: {
        type: Number,
        default: 0
    },
    role: {
        type: [
            "admin",
            "user"
        ],
        default: "user"
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('userHostels', userHostelSchema);