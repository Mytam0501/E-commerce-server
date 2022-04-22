const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    author: String,
    time: String,
    caregory: String,
    qoute: String,
    qouteAuthor: String,
    brandHistoryDescription: String,
    slug: { type: String, slug:'title', unique: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema);