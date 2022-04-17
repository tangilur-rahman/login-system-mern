const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//  "/login"
const login = async (req, res) => {
	const { email, password } = req.body;

	if (email && password) {

		try {
			const checkExist = await userModel.findOne({ email: email });

			const comparePassword = await bcrypt.compare(
				password,
				checkExist.password
			);

			if (comparePassword) {
				// create token
				const token = await jwt.sign(
					{ id: checkExist._id, email: checkExist.email },
					process.env.SECRET_KEY,
					{ expiresIn: "365d" }
				);

				checkExist.tokens = [].concat({ token: token });

				await checkExist.save();

				res.cookie(
					"userSession",
					token,
					 {
						expires: new Date(Date.now() + 31556952000)
					}
				);

				res.status(200).json({ message: "Welcome to our Page" });
			} else {
				res.status(400).json({ error: "Authentication Failed!" });
			}

		} catch (error) {
			res.status(400).json({ error: "Invalid Account!, plz Signup" });
		}
	} else {
		res.status(400).json({ error: "Plz Fill-up Properly 😡" });
	}
};

module.exports = login;
