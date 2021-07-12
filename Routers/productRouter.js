const express = require("express");
const Product = require("../models/productModel");
const wrapAsync = require("../utilities/wrapAsync");
const seedData = require("../seedData/data");
const jwt = require("jsonwebtoken");

const productRouter = express.Router();

productRouter.get(
	"/",
	wrapAsync(async (req, res) => {
		const products = await Product.find({});
		res.json({ products });
	})
);

productRouter.get(
	"/:id",
	wrapAsync(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json({ product });
		} else {
			res.status(404).send({ message: "Product not found" });
		}
	})
);

productRouter.post(
	"/",
	wrapAsync(async (req, res) => {
		const { token } = req.body;
		const product = new Product(req.body.product);
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		if (decoded.isAdmin) {
			await product.save();
			if (product._id) {
				res.json({ message: "success" });
			} else {
				res.status(401).send({ message: "Error saving data" });
			}
		}
	})
);

module.exports = productRouter;
