#Urban Grocers API Testing Project

## Project Description
This project aims to ensure the reliability and correctness of our application's APIs through automated testing. The test suite is designed to validate the functionality of API endpoints, verifying that they meet the specified requirements and handle various conditions appropriately.

## Technologies and Techniques Used
- **Programming Language**: JavaScript
- **Testing Framework**: Jest
- **HTTP Client**: Fetch API
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

3. **Run Tests Using Jest**
   Execute the following command to run the tests:
   ```bash
   npx jest

4. **Project Structure**
qa-api-testing/
├── .github/workflows
├── test.yml
├── tests/ # Directory containing test cases
│   ├── deleteHandlers.test.js
│   ├── getHandlers.test.js
│   ├── postHandlers.test.js
│   ├── putHandlers.test.js
├── eslintcr.js
├── .gitignore # Git ignore file
├── README.md # Project documentation
├── config.js
├── package-lock.json
└── package.json # Project metadata and dependencies


