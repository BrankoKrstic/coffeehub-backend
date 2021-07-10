const express = require("express");
const Product = require("../models/productModel");
const wrapAsync = require("../utilities/wrapAsync");
const seedData = require("../seedData/data");

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

productRouter.get(
	"/seed",
	wrapAsync(async (req, res) => {
		await Product.deleteMany({});
		const createdProducts = await Product.insertMany(seedData.products);
	})
);

module.exports = productRouter;
