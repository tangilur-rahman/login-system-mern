const mongoose = require("./connectDatabase");
const validator = require("validator");

const schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},

	email: {
		type: String,
		required: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email");
			}
		}
	},

	phone: {
		type: String,
		required: true,
		validate(value) {
			if (!validator.isMobilePhone(value, ["bn-BD"])) {
				throw new Error("invalid Phone Number");
			}
		}
	},

	address: {
		type: String,
		required: true,
		trim: true
	},

	profession: {
		type: String,
		required: true,
		trim: true
	},

	password: {
		type: String,
		required: true,
		trim: true
	},

	cpassword: {
		type: String,
		required: true,
		trim: true
	},

	message: {
		type: String,
		default: "No FeedBack"
	},

	date: {
		type: Date,
		default: Date.now()
	},

	tokens: [
		{
			token: {
				type: String,
				unique: true,
				required: true
			}
		}
	]
});

const model = mongoose.model("USERINFO", schema);

module.exports = model;
