#Urban Grocers API Testing Project

## Project Description
This project aims to ensure the reliability and correctness of our application's APIs through automated testing. The test suite is designed to validate the functionality of API endpoints, verifying that they meet the specified requirements and handle various conditions appropriately.
It contains automated tests for the Urban Grocers API. The tests cover various endpoints including DELETE, PUT, GET, and POST methods to ensure the API's functionality. The tests are designed to check the response status codes and verify that the response bodies contain the expected data.

## Technologies and Techniques Used
- **Programming Language**: JavaScript - The primary programming language used for writing the tests.
- **Testing Framework**: Jest - JavaScript testing framework used to run the tests and make assertions about the API responses.
- **HTTP Client**: Fetch API - Used to make HTTP requests to the Urban Grocers API endpoints.
- **Environment Management**: Node.js and npm

## Instructions on How to Run the Tests

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/qa-api-testing.git
   cd hm07-qa-us

2. **Install Dependencies**
   Make sure you have Node.js and npm installed. Then, run:
   ```bash
   npm install

3. **Set URL API Adress**
   1) Go to config.js
   2) Insert current link
   ```bash
   module.exports = {
    API_URL: "https://cnt-d4ec8d70-ef18-4b1f-99a3-12b4acad8d33.containerhub.tripleten-services.com"
   }

3. **Run Tests Using Jest**
   Execute the following command to run the tests:
   ```bash
   npx jest

## Project Structure
qa-api-testing/
├── .github/workflows
├── test.yml
├── tests/ # Directory containing test cases
│ ├── deleteHandlers.test.js
│ ├── getHandlers.test.js
│ ├── postHandlers.test.js
│ ├── putHandlers.test.js
├── eslintcr.js
├── .gitignore # Git ignore file
├── README.md # Project documentation
├── config.js
├── package-lock.json
└── package.json # Project metadata and dependencies


