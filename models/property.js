const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    title: { type: String, required: true},
    description: { type: String},
    image: { data: Buffer, contentType: String },
    dateAdded: { type: Date, default: Date.now()}
});

// Compile model from schema
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;