const mongoose = require('mongoose');

const jsonData = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName : {
        type: String
    },
    id : {
        type:Number
    },
});

exports.data = mongoose.model("data",jsonData);