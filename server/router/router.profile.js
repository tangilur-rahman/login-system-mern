const express = require("express");
const tokenVerify = require("./../controller/controller.tokenVerify");

const profile = express();

profile.get("/", tokenVerify, (req, res) => {
	res.status(200).json(req.userDocument);
});

module.exports = profile;
