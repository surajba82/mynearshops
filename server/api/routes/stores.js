const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Stores = require('../models/stores');
const authenticate = require('../middleware/authenticate');


router.post('/create', (req, res, next) => {

    const store = new Stores({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        country: req.body.country,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        postcode: req.body.postcode,
        location: {
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },
        storeUrl: req.body.storeUrl,
        productPic: req.body.productPic,
        createdBy: req.body.createdBy
    });

    store.save()
    .then(store => {
        res.status(201).json({
            message: store
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })

});


router.get('/', (req, res, next) => {

    // Product.find({})
    // .select('_id name price productPic slug')
    // .exec()
    // .then(products => {
    //     res.status(200).json({
    //         message: products
    //     });
    // })
    // .catch(er => {
    //     res.status(500).json({
    //         error: er
    //     });
    // })

    res.status(200).json({
        message: {
            stores : []
        }
    });

});


module.exports = router;