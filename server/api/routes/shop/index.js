const express = require('express');
const router = express.Router();
const storeDetailResponse = require('../../../mocks/storeDetail.json');

router.get('/shopdetail', (req, res) => {
    let data = {
        data: storeDetailResponse
    };
    setTimeout(() => res.send(JSON.stringify(data)),1500);
});


module.exports = router;