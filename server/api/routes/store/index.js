const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Store = require('../../models/store/storeSchema');
const authenticate = require('../../middleware/authenticate');


router.post('/create', (req, res, next) => {

    const {
        storeName,
        locality,
        streetAddress,
        cityDistrictTown,
        state,
        landmark,
        country,
        phoneNumbers, // Array
        postalCode,
        location, //object with prop latitude and longitude
        storePics, //Array of images
        createdBy
    } = req.body;

    console.log(req.body);

    const store = new Store({
        _id: new mongoose.Types.ObjectId(),
    storeName: storeName,
    address: { 
        locality: locality,
        streetAddress: streetAddress,
        cityDistrictTown: cityDistrictTown,
        state: state,
        landmark: landmark
     },
    country: country,
    phoneNumbers: phoneNumbers,
    postalCode: postalCode,
    location: location,
    storeUrl: `${storeName.toLocaleLowerCase().replace(" ","-")}`,
    storePics: storePics,
    createdBy: createdBy,
    });

    store.save()
    .then(store => {
        res.status(201).json({
            message: "Store Created",
            data: {
                _id: store._id,
                storeUrl: `http://localhost:8002/${store.storeUrl}`
            }
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })

});


router.get('/', (req, res, next) => {
    Stores.find({})
    .select('_id name address1 postcode storeUrl')
    .exec()
    .then(stores => {
        res.status(200).json({
            data: stores
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })
});


module.exports = router;