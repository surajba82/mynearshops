const mongoose = require('mongoose');
const storesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeName: { type: String, required: true, unique: true },
    address: { 
        locality: String,
        address: String,
        cityDistrictTown: String,
        state: String,
        landmark: String
     },
    country: {type: String, required: true},
    phoneNumbers: [
        { 
            number: {type: Number, required: true, unique: true}
        }
    ],
    postalCode: { type: String, required: true },
    location: { 
        latitude: { type: String },
        longitude: { type: String },
    },
    storeUrl: { type: String, required: true, unique: true },
    storePics: [
        {
            img: { type: String}
        }
    ],
    isActive: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    updatedAt: Date,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Stores', storesSchema);