if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routers/userRouter");

const app = express();
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((res) => console.log("DATABASE CONNECTION OPEN"))
	.catch((err) => console.log("DATABASE CONNECTION ERROR" + err));

const PORT = process.env.PORT;

const corsConfig = {
	origin: process.env.ORIGIN,
	optionsSuccessStatus: 200,
	methods: "GET, POST",
};

app.use(cors(corsConfig));

const products = [
	{
		name: "Coffee Bag",
		categories: ["coffee"],
		price: 0.99,
		id: 1,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
	{
		name: "Coffee Bag2",
		categories: ["coffee"],
		price: 0.99,
		id: 2,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
	{
		name: "Coffee Bag3",
		categories: ["coffee"],
		price: 0.99,
		id: 3,
		image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus, aliquid doloremque doloribus eos quam, sit praesentium vero quidem labore quisquam culpa voluptatum! Nulla iure voluptatum sint! Perspiciatis similique iusto praesentium sed fugiat asperiores atque, sint non exercitationem labore rem dolores perferendis distinctio dolorem, excepturi voluptatem debitis sapiente et accusantium?",
	},
];

app.get("/api/products", (req, res) => {
	res.json({ products });
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
