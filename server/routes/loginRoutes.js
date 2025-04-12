const express = require("express");

const { loginUser } = require("../controllers/loginController");

const router = express.Router();

// Route for user login
router.post("/", loginUser);

module.exports = router;
