# CoffeeHub Project

This is the backend component for the CoffeeHub ecommerce project. The backend uses Node and Express and is connected to a Mongo Atlas database. It feautres a RESTful API, product, order and user models, and processes Stripe payment data safely.

The backend is meant to work with a React-based forntend application found in a [separate repository](https://github.com/BrankoKrstic/coffeehub-frontend).

## To install

Clone the github repo to your machine.

Execute `cd coffeehub-backend` into the terminal to go into the repo folder

Execute `npm install` to download all dependencies

`npm start` to open the project on a development server

Make sure to enter a Stripe private key, a Mongo database location, a secret token encryption key, and an origin URL for your frontend as environment variables. Also, seed the Mongo "users" collection with admin credentials to be able to log in and interact with the admin dashboard.

## Using the app

Once you set up a test server, hit the API endpoints with Postman or through the CoffeeHub frontend. 
