const express = require("express");
const register = require("./register");
const login = require("./login");
//const update = require("./update");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
//router.post("/update", update)

module.exports = router;