const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		name: { type: String, required: true },
		categories: [String],
		price: {
			type: Number,
			required: true,
			min: 0.01,
		},
		image: { type: string, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", ProductSchema);
