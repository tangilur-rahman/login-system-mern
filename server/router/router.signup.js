const express = require("express");
const c_signup = require("./../controller/controller.signup");

const signup = express.Router();

signup.post("/", c_signup);

module.exports = signup;
