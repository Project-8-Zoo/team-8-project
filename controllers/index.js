const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes");
const animalsRoutes = require("./animalsRoutes")

router.use(animalsRoutes)
router.use(userRoutes)

module.exports = router;