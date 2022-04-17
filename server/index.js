/*
 * File: index.js
 * Project: login-system
 * Description :
 * Author: Tangilur Rahman
 * File Created: Sunday, 5th April 2022 2:34:11 pm
 * Last Modified: Sunday, 17th April 2022 5:30:20 pm
 */

// dependencies
const express = require("express");
const cookie = require("cookie-parser");
const path = require("path");

// import env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// create main router
const app = express();

// insert data into request Object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

// import router
const home = require("./router/router.home");
const profile = require("./router/router.profile");
const contract = require("./router/router.contract");
const signup = require("./router/router.signup");
const login = require("./router/router.login");
const logout = require("./router/router.logout");

// redirect router
app.use("/home", home);
app.use("/signup", signup);
app.use("/login", login);
app.use("/profile", profile);
app.use("/contract", contract);
app.use("/logout", logout);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV == "production") {
	app.use(express.static("build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("client disconnected");
	});
}
// --------------------------deployment-----------------------------

// 404 ERROR page handle
app.use((req, res) => {
	res.status(404).json({ error: "File Not Found" });
});

// own ERROR handler
app.use((error, req, res, next) => {
	if (res.headersSent) {
		next(error);
	} else if (error) {
		res.status(500).json({ error: error.message });
	} else {
		next(error);
	}
});

// start server
app.listen(PORT, () =>
	console.log(`server was running at http://localhost:${PORT}`)
);
