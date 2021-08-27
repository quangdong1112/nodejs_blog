const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: 'string', required: true },
        description: { type: 'string' },
        image: { type: 'string' },
        videoId: { type: 'string', required: true },
        level: { type: 'string' },
        slug: { type: 'string', slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
