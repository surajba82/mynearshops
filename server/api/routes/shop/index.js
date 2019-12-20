const express = require('express');
const router = express.Router();
const storeDetailResponse = require('../../../mocks/storeDetail.json');

router.get('/shopdetail', (req, res) => {
    let data = {
        data: storeDetailResponse
    };
    res.send(JSON.stringify(data))
});


module.exports = router;