const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const wrapAsync = require("../utilities/wrapAsync");

const data = {
	users: [
		{
			username: "Admin",
			email: "admin@example.com",
			password: bcrypt.hashSync("admin", 10),
			isAdmin: true,
		},
	],
};

const userRouter = express.Router();

// userRouter.get(
// 	"/seed",
// 	wrapAsync(async (req, res) => {
// 		await User.remove({});
// 		const createdUsers = await User.insertMany(data.users);
// 	})
// );

module.exports = userRouter;
