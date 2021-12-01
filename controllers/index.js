const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes");
const animalsRoutes = require("./animalsRoutes")
const questionRoutes = require("./questionRoutes")

router.use(questionRoutes)
router.use(animalsRoutes)
router.use(userRoutes)

module.exports = router;