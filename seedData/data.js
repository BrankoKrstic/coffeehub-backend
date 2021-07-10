const bcrypt = require("bcrypt");

data = {
	products: [
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
	],
	users: [
		{
			username: "Admin",
			email: "admin@example.com",
			password: bcrypt.hashSync("admin", 10),
			isAdmin: true,
		},
	],
};

module.exports = data;
