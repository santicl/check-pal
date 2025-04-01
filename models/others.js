const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    createdByUser: {
        type: String,
        require: true
    },
    hostelId: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('notification', notificationSchema);