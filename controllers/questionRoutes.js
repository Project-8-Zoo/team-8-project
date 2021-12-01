const express = require('express');
const router = express.Router();
const {Questions} = require('../models');



router.get("/questions", (req, res) => {
   Questions.find({}).then(data => {
        data ? res.json(data) : res.status(404).send("No questions found")
    }).catch(err => {
        err ? res.status(500).send(`Error, please try again, ${err}`) : res.status(200).send("Success!")
    });
});

router.get("/llama", (req, res) => {
    Questions.find({ animal: "Llama" }).then(data => {
        if (data) {
            const hardAlgo = data[Math.floor(Math.random() * data.length)];
            res.json(hardAlgo);
        } else {
            res.status(404).send("No questions found")
        }
    }).catch(err => {
        err ? res.status(500).send(`Error, please try again, ${err}`) : res.status(200).send("Success!")
    })
});

router.get("/gorilla", (req, res) => {
    Questions.find({ animal: "Gorilla" }).then(data => {
        if (data) {
            const ani = data;
            res.json(ani);
        } else {
            res.status(404).send("No questions found")
        }
    }).catch(err => {
        err ? res.status(500).send(`Error, please try again, ${err}`) : res.status(200).send("Success!")
    })
});

router.get("/arfox", (req, res) => {
    Questions.find({ animal: "Arctic Fox" }).then(data => {
        if (data) {
            const ani = data;
            res.json(ani);
        } else {
            res.status(404).send("No questions found")
        }
    }).catch(err => {
        err ? res.status(500).send(`Error, please try again, ${err}`) : res.status(200).send("Success!")
    })
});
router.get("/boa", (req, res) => {
    Questions.find({ animal: "Boa Constrictor" }).then(data => {
        if (data) {
            const ani = data;
            res.json(ani);
        } else {
            res.status(404).send("No questions found")
        }
    }).catch(err => {
        err ? res.status(500).send(`Error, please try again, ${err}`) : res.status(200).send("Success!")
    })
});
module.exports = router;