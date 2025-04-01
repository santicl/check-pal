const mongoose = require('mongoose');
const { Schema } = mongoose;

const workersNewUserSchema = new Schema({
    nameImageProfile: {
        type: String,
        require: true
    },
    nameCompleted: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    hostelId: {
        type: String,
        require: true
    },
    celphone: {
        type: String,
        require: true
    },
    profesion: {
        type: String,
        require: true
    },
    namepdf: {
        type: String,
        require: true
    },
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    numberExperience: {
        type: Number,
        require: true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('workersnewuserSchema', workersNewUserSchema);