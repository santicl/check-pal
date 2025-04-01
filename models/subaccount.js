const mongoose = require('mongoose');
const { Schema } = mongoose;

const subaccountSchema = new Schema({
    nameHostel: {
        type: String
    },
    email: {
        type: String
    },
    termsAndCondi: {
        type: Boolean,
        require: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('subAccountsPayu', subaccountSchema);