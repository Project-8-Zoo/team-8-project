const express = require('express');
const router = express.Router();
const {Animals} = require('../models');



router.get("/animals", (req, res) => {
   Animals.find({}).then(data => {
        data ? res.json(data) : res.status(404).send("FOOL! You have lost the algorithms!")
    }).catch(err => {
        err ? res.status(500).send(`FOOL! Due to your idiocy, ${err}`) : res.status(200).send("Success!")
    });
});


module.exports = router;