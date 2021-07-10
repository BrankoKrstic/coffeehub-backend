const express = require("express");
const User = require("../models/userModel");
const wrapAsync = require("../utilities/wrapAsync");
const seedData = require("../seedData/data");

const userRouter = express.Router();

userRouter.get(
	"/seed",
	wrapAsync(async (req, res) => {
		await User.remove({});
		const createdUsers = await User.insertMany(seedData.users);
	})
);

module.exports = userRouter;
