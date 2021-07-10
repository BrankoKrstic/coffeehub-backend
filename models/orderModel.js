const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		totalPrice: { type: Number, required: true, min: 0.01 },
		items: [
			{
				product: {
					name: { type: String, required: true },
					categories: [String],
					_id: { type: String, required: true },
					price: {
						type: Number,
						required: true,
						min: 0.01,
					},
					image: { type: String, required: true },
					description: { type: String, required: true },
				},
				qty: { type: Number, required: true, min: 1 },
			},
		],
		shippingDetails: {
			name: { type: String, required: true },
			email: { type: String, required: true },
			phone: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalcode: { type: String, required: true },
			country: { type: String, required: true },
		},
		payment: {
			isPaid: { type: Boolean, required: true },
			token: { type: String, required: true },
			paidAt: { type: Number },
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Order", OrderSchema);
