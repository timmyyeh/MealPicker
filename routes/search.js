const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.send("health");
});

router.get("/", async (req, res) => {
  try {
    const { city, state, zipcode } = req.query;
    console.log(`city: ${city} zip: ${zipcode}`);
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/search?location=\"${city}, ${state} ${zipcode}\"`,
      {
        headers: { Authorization: `Bearer ${process.env.YELP_APIKEY}` },
      }
    );
    console.log(response.data.businesses);
    res.json(response.data.businesses);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
