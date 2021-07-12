const express = require("express");
const wrapAsync = require("../utilities/wrapAsync");
const Order = require("../models/orderModel");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const orderRouter = express.Router();
const jwt = require("jsonwebtoken");

orderRouter.post(
	"/",
	wrapAsync(async (req, res) => {
		const { token } = req.body;
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		if (decoded.isAdmin === true) {
			const orders = await Order.find({});
			if (orders) {
				res.json({ orders });
			} else {
				res.status(404).send({ message: "Error fetching orders" });
			}
		} else {
			res.status(401).send({ message: "Not authenticated" });
		}
	})
);

orderRouter.get(
	"/:id",
	wrapAsync(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			res.json({ order });
		} else {
			res.status(404).send({ message: "Order not found" });
		}
	})
);

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
			order.complete = false;
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
