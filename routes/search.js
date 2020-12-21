const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
   res.send('health');
});

router.get('/:postal', async (req, res) => {
    try {
        const response = await axios.get(`https://api.yelp.com/v3/businesses/search?location=\"Seattle\"`, {
            headers: {'Authorization': `Bearer ${process.env.YELP_APIKEY}`}
        });
        console.log(response.data.businesses);
        
    } catch (err) {
        console.log(err);
    }
});



module.exports = router;