const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Store = require('../../models/store/storeSchema');
const authenticate = require('../../middleware/authenticate');
const storesList = require('../../../mocks/storesList.json');

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
        emails, // Array
        postalCode,
        location, //object with prop latitude and longitude
        storePics, //Array of images
        storeUrl,
        createdBy
    } = req.body;

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
        emails: emails,
        postalCode: postalCode,
        location: location,
        storeUrl: storeUrl,
        storePics: storePics,
        createdBy: createdBy,
    });

    store.save()
    .then(store => {
        res.status(201).json({
            message: "Store Created",
            data: {
                _id: store._id,
                storeUrl: `${store.storeUrl}`
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
    // Store.find({})
    // .select('_id storeName address postalCode storeUrl')
    // .exec()
    // .then(stores => {
    //     res.status(200).json({
    //         data: stores
    //     });
    // })
    // .catch(er => {
    //     res.status(500).json({
    //         error: er
    //     });
    // })
    // const data = {
    //     data: storesList
    // };
    res.send(JSON.stringify(storesList))
});


module.exports = router;