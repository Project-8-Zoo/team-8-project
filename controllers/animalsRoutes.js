const express = require('express');
const router = express.Router();
const {Animals, Questions} = require('./models');


router.get("/", (req, res) => {
    res.json(Animals)
})



module.exports = router;