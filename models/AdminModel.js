const mongoose = require('mongoose');

const adminMdole = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Name field are required']
    },
    email : {
        type: String,
        required: [true, 'Email field are required'],
        unique: true
    },
    cell : {
        type: String,
        required: [true, 'Cell field are required'],
        unique: true
    },
    username : {
        type: String,
        required: [true, 'Username field are required'],
        minLength: 5,
        maxLength: 10
    },
    location : {
        type: String,
        required: false,
        default: 'Dhaka'
    },
    skill : {
        type: String,
        required: false,
        default: 'PHP'
    },
    password : {
        type: String,
        required: [true, 'Password field is required'],
        default: 'salim'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Admin', adminMdole);