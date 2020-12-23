const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/add', async (req, res) => {
    try {
        console.log(req.body);
    }
    catch (error) {
        
    }
});

module.exports = router;