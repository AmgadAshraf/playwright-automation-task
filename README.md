# Playwright Automation Task

This task contains end-to-end tests for [Sauce Demo](https://www.saucedemo.com) using [Playwright](https://playwright.dev/).



# Prerequisites

-Node.js v18+
-npm (bundled with Node.js)
-Git


## 🚀 Dependency Installation Instructions

1.Clone the repository 

git clone https://github.com/AmgadAshraf/playwright-automation-task
cd <project-folder>

2.Install prject dependencies
npm install

3.Install Playwright browsers
npx playwright install


# Test execution commands

To run all tests:
npx playwright test

To run tests in headed mode: 
npx playwright test --headed

To run tests with UI mode:
npx playwright test --ui



# How to view the HTML report

To view the HTML report: 
npx playwright test --reporter=html

To Open the latest HTML report
npx playwright show-report



# Project Structure: 

.
├── page-objects/      # Page Object Models
├── tests/             # Test specs
├── playwright.config.ts
├── package.json
└── README.md


# Test Cases: 

1-Login Functionality
2-Sorting Products by price
3-Adding Products to cart from products page
4-Removing Products from cart from products page
5-View Cart Content
6-Complete Checkout information form
7-Cancel checkout
8-Remove Products from cart from Cart page
9-Empty Cart Checkout
10-Logout Functionality


# Challenges encountred and solutions

First challenge that encountred me was during the Sorting Products, the assertion in the for loop failed due to the '$' present in the number. So I made the function that converts the string into a number and replaces the '$' with ''. 


The next challenge that encountred me was in the View Cart Content, I wanted to reuse my 'addingProductsToCart function but that function returns void and can't be used in the array I wanted to make. So I made another function with a string return type to be able to insert the values in an array and compare it with the expected items.


The next challenge I encountred was with the Empty Cart Checkout, I wanted to find a way to assert that the cart is actually empty, until I found the locator to assert with that the count of items is equal to 0.

