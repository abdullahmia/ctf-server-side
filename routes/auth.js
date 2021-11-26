const express = require("express");
const router = express.Router();

// Controllers
const {login, register} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

module.exports = router;
