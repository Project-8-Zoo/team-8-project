const express = require('express');
const router = express.Router();
const {Questions} = require('../models');



router.get("/questions", (req, res) => {
   Questions.find({}).then(data => {
        data ? res.json(data) : res.status(404).send("FOOL! You have lost the algorithms!")
    }).catch(err => {
        err ? res.status(500).send(`FOOL! Due to your idiocy, ${err}`) : res.status(200).send("Success!")
    });
});


module.exports = router;