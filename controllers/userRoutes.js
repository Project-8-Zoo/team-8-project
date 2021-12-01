const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const router = express.Router();
const tokenAuth = require("../middleware/tokenAuth")
const { User } = require("../models");

const JWT_SECRET = process.env.JWT_SECRET;

//user register route
router.post("/signup", ({ body }, res) => {
    const user = new User(body);
    // user.setFullName();
    user.lastUpdatedDate();
    user.save();

    User.create(user)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

//user login route
router.post("/login", async (request, response) => {
    try {
        var user = await User.findOne({ username: request.body.username }).exec();
        if (!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        user.comparePassword(request.body.password, (error, match) => {
            if (!match) {
                return response.status(400).send({ message: "The password is invalid" });
            }
        });
        // console.log(user._id)
        const token = jwt.sign({
            username: user.username,
            id: user._id
        },

            process.env.JWT_SECRET

            , {
                expiresIn: "5m"
            });
        response.json({
            token: token,
            user: user.username,
            id: user._id,
            message: "The username and password combination is correct!"
        })
        // response.send({ message: "The username and password combination is correct!" })

    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

router.get("/users", tokenAuth, function (req, res) {
    User.find({}, function (error, users) {
        if (error) {
            console.log(error)
        } else {
            res.json(users)
        }
    })
})

router.get("/user/:id", tokenAuth, function (req, res) {
    User.findById({ _id: req.params.id }, function (error, user) {
        if (error) {
            console.log(error)
        } else {
            res.json(user)
        }
    })
})

router.get("/zooschool", tokenAuth, (req, res) => {
    res.send(`Welcome to the game ${req.user.username}`)

})



router.get("validateToken",)

module.exports = router;