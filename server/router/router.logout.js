const express = require("express");
const verifyToken = require("./../controller/controller.tokenVerify");

const logout = express.Router();

logout.get("/", verifyToken, async (req, res) => {
	try {
		await res.clearCookie("userSession");

		res.status(200).json({ message: "Logout Successfully 🙋‍♂️" });
	} catch (error) {
		res.status(500).json({ error: "Something Was Wrong,Try Later" });
	}
});

module.exports = logout;
