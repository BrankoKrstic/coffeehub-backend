const express = require("express");
const wrapAsync = require("../utilities/wrapAsync");
const Order = require("../models/orderModel");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const orderRouter = express.Router();

orderRouter.post(
	"/payment",
	wrapAsync(async (req, res) => {
		const { totalPrice, paymentMethod, items, shippingDetails } = req.body;
		const payment = await stripe.paymentIntents.create({
			amount: Math.round(totalPrice * 100),
			currency: "USD",
			description: "Coffee Company",
			payment_method: paymentMethod.id,
			confirm: true,
		});
		const order = new Order({ items, totalPrice, shippingDetails });
		if ((payment.status = "succeeded")) {
			order.payment.isPaid = true;
			order.payment.paidAt = Date.now();
			order.payment.token = paymentMethod.id;
			order.save();
		} else {
			order.payment.isPaid = false;
			order.payment.token = paymentMethod.id;
			order.save();
		}
		res.json({ success: order.payment.isPaid, id: order._id });
	})
);

module.exports = orderRouter;
