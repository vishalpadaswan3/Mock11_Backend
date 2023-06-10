const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    travellers: {
        type: Number,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
})


const postModel = mongoose.model('post', postSchema);

module.exports = { postModel };