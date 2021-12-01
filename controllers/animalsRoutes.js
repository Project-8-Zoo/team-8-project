const express = require('express');
const router = express.Router();
const {Animals} = require('../models');



router.get("/animals", (req, res) => {
   Animals.find({}).then(data => {
        data ? res.json(data) : res.status(404).send("No animals found")
    }).catch(err => {
        err ? res.status(500).send(`Error code, ${err}`) : res.status(200).send("Success!")
    });
});


module.exports = router;