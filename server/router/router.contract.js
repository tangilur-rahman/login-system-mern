const express = require("express");
const tokenVerify = require("./../controller/controller.tokenVerify");
const getFeedBack = require("./../controller/controller.contract");

const contract = express();

contract.get("/", tokenVerify, (req, res) => {
	res.status(200).json(req.userDocument);
});

contract.put("/", tokenVerify, getFeedBack);

module.exports = contract;
