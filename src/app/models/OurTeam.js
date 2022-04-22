const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const teamSchema = mongoose.Schema({
    name: String,
    job: String,
    image: String,
    description: String,
    facebook: String,
    instagram: String,
    phoneNumber: String,
    youtube: String,
    emailAddress: String,
    slug: { type: String, slug:'name', unique: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('OurTeam', teamSchema);