const mongoose = require('mongoose');
const storesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: {type: String, required: true},
    country: {type: String, required: true},
    phone1: { type: Number, required: true },
    phone2: { type: Number },
    postcode: { type: String, required: true },
    location: { 
        latitude: { type: String },
        longitude: { type: String },
    },
    storeUrl: { type: String, required: true },
    storePic: [
        {
            img: String
        }
    ],
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    updatedAt: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Stores', storesSchema);