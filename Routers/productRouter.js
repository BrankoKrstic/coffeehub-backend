const express = require("express");
const Product = require("../models/productModel");
const wrapAsync = require("../utilities/wrapAsync");

const productRouter = express.Router();

const products = [
	{
		name: "Coffee Bag",
		categories: ["coffee"],
		price: 0.99,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
	{
		name: "Coffee Bag2",
		categories: ["coffee"],
		price: 0.99,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
	{
		name: "Coffee Bag3",
		categories: ["coffee"],
		price: 0.99,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
];

productRouter.get(
	"/",
	wrapAsync(async (req, res) => {
		const products = await Product.find({});
		console.log(products);
		res.json({ products });
	})
);

productRouter.get(
	"/seed",
	wrapAsync(async (req, res) => {
		await Product.deleteMany({});
		const createdProducts = await Product.insertMany(products);
	})
);

module.exports = productRouter;
