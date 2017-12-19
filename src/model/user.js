import mongoose from 'mongoose';

const User = mongoose.model('User', {

    personID: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    }

});
module.exports = { User };