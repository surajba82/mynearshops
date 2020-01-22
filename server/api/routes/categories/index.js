const express = require('express');
const router = express.Router();
const products = require('../../../mocks/products.json');

router.get('/shopdetail/products', (req, res) => {
    let data = {
        data: products
    };
    setTimeout(() => res.send(JSON.stringify(data)),1500);
});


module.exports = router;