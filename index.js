const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const products = [
	{
		name: "Coffee Bag",
		categories: ["coffee"],
		price: 0.99,
		id: 1,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
	},
	{
		name: "Coffee Bag2",
		categories: ["coffee"],
		price: 0.99,
		id: 2,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
	},
	{
		name: "Coffee Bag3",
		categories: ["coffee"],
		price: 0.99,
		id: 3,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
	},
];

app.get("/api/products", (req, res) => {
	res.json({ products });
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
