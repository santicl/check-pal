const mongoose = require('mongoose');
const { Schema } = mongoose;

const workersInvitationsSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    token: {
        type: String,
        require: true
    },
    customTokenFirebase: {
        type: String,
        require: true
    },
    hostelId: {
        type: String,
        require: true
    },
    invitationURL: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('workersInvitations', workersInvitationsSchema);