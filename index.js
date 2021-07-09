if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routers/userRouter");
const productRouter = require("./Routers/productRouter");

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

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
