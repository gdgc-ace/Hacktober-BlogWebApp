const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
    },
    images: [{
        type: String
    }],
    author: {
        type: String,
        required: true
    },
    // category: {
    //     type: String,
    //     enum: ['Tech', 'Cultural', 'Hackathon', 'Seminar'],
    //     required: true
    // },
    tags: [{
        type: String
    }],
    isPublished: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Blog', blogSchema);
