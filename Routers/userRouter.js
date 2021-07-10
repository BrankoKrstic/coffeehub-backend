const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const wrapAsync = require("../utilities/wrapAsync");
const seedData = require("../seedData/data");
const generateToken = require("../utilities/generateToken");
const userRouter = express.Router();

userRouter.get(
	"/seed",
	wrapAsync(async (req, res) => {
		await User.remove({});
		const createdUsers = await User.insertMany(seedData.users);
	})
);

userRouter.post(
	"/signin",
	wrapAsync(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		if (user && user.isAdmin) {
			const match = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (match) {
				return res.json({
					_id: user._id,
					username: user.username,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
			}
		}
		res.status(401).send({ message: "Invalid login details" });
	})
);

module.exports = userRouter;
