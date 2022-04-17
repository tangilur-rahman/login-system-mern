const express = require("express");
const c_login = require("./../controller/controller.login");

const login = express.Router();

login.post("/", c_login);

module.exports = login;
