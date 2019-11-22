const mongoose = require('mongoose');
const storesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeName: { type: String, required: true },
    address: { type: String, required: true },
    city: {type: String, required: true},
    country: {type: String, required: true},
    phone: [
        { type: Number, required: true, unique: true}
    ],
    postalCode: { type: String, required: true },
    location: { 
        latitude: { type: String },
        longitude: { type: String },
    },
    storeUrl: { type: String, required: true },
    storePic: [
        {
            img: { type: String}
        }
    ],
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    updatedAt: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Stores', storesSchema);