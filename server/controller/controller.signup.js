const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");

//  "/signup"
const signup = async (req, res) => {
	const { name, email, phone, address, profession, password, cpassword } =
		req.body;

	if (
		name &&
		email &&
		phone &&
		address &&
		profession &&
		password &&
		cpassword
	) {

		try {
			// check Email Already Exists or not
			const check = await userModel.findOne({ email: email });

			if (check) {
				res
					.status(406)
					.json({ error: "That Email Already Exists, Please Login" });
			} else {
				// check password match or not
				if (password === cpassword) {
					if (password.length < 8) {
						throw Error("Password must be minimum 8 ");
					} else {
						const hashPassword = await bcrypt.hash(password, 10);
						const cHashPassword = await bcrypt.hash(cpassword, 10);

						const document = await userModel({
							name,
							email,
							phone,
							address,
							profession,
							password: hashPassword,
							cpassword: cHashPassword
						});

						// save that document into mongoDB
						await document.save();
						res.status(200).json({ message: "Account Created Successfully" });
					}
				} else {
					res.status(401).json({ error: "Password Didn't Match 😣" });
				}
			}
		} catch (error) {
			res.status(500).json({ error: "Invalid Email or BD-Phone Number 😡" });
		}
	} else {
		res.status(422).json({ error: "Plz Fill-up Properly 😡" });
	}
};

module.exports = signup;
