import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Person = mongoose.model('Person', {

    name: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        required: false,
        trim: true
    },
    registerDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    role: {
        type: String,
        required: false,
        trim: false
    },
    sector: {
        type: String,
        required: false,
        trim: false
    },
    phoneNumber: {
        type: Number,
        required: false,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: false
    },
    cpf: {
        type: Number,
        required: false,
        trim: false
    },

});
module.exports = { Person };