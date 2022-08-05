const mongoose = require('mongoose');

const data = new mongoose.Schema({
    name:{
    type: String,
    required:true,
    trim:true
    },
    email:{
    type: String,
    required:true,
    },
    message:{
    type: String,
    required:true,
    }
});

const userData = mongoose.model('message',data);

module.exports = userData;