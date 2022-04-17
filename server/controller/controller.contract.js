const userModel = require("./../models/userModel");

// "/post"
const getFeedBack = async (req, res) => {

	try {
		const message = req.body.message;

		if (message) {
			await userModel.updateOne({ _id: req.userDocument }, { $set: { message } });

			res.status(200).json({ message: "Feedback Sended Successfully 🥰" });
		} else {
			res.status(400).json({ error: "Empty Field 🤣" });
		}

	} catch (error) {
		res.status(500).json({ error: "We are sorry!,Try again Later" });
	}
};

module.exports = getFeedBack;
