const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			username: user.username,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "30d",
		}
	);
};

module.exports = generateToken;
