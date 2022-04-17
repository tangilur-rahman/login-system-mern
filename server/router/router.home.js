const express = require("express");
const tokenVerify = require("./../controller/controller.tokenVerify");

const home = express.Router();

home.get("/", tokenVerify, (req, res) => {
	res.status(200).json(req.userDocument);
});

module.exports = home;
