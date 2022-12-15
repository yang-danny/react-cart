# React Cart Project Setup instructions

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Technologies used

This project applied React technologies:
--React frameworks
--React Componments
--React Hooks
--LocalStorage

## Requirements check list
1. Have a pre-populated (hard coded) array of objects as products.
   --Store pre-load data in data.js file as phoneList array, when page start loading, the Phone componment will load data from data.js file to Cards componment.
2. Your product display should have (not limited to) product image, product name, product price
   --Cards componment will display loaded data into card box as image, product name, brand and price.
3. All products should be displayed when the page loads
   --Cards use grid display to list all products, but this app just list 12 products for demo.
4. Using an ‘add to cart’ button, the user should be able to add the products to a shopping cart list
   --Cards have 'Add to Cart' button which handle an event function 'handleClick' and allow user to add this product into cart.
5. The shopping cart lists all products and displays a the total price
   --Cart componment have an event function 'handlePrice' to calculate amount of total prouducts in cart.
6. The user should also be able to delete the products from the cart, thus modifying the total price of the cart
   --Cart componment have an event function 'handleRemove' to remove product by filter item id and return new array to update cart.
7. The user should be able to enter a quantity for each product
   --Cart componment have two buttons to change quantity of each product. '+' button will toggle event function 'handleChange' to add quantity each click and update amount, '-' button will toggle event function 'handleChange' to minus quantity each click and update amount.