const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const prdScheme = mongoose.Schema({
    title: String,
    introduce: String,
    price: Number,
    brand: String,
    category: String,
    description: String,
    image: String,
    slug: { type: String, slug:'title', unique: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', prdScheme);