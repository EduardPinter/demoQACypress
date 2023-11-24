# Cypress DemoQA Project

DemoQA Cypress API and UI Assignment

1. [Tools Used](#tools-used)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Test Plan](#test-plan)

### Tools Used
- Cypress.io
- Faker

### Installation
Simply input the following once cloned:

`npm install`

### Running Tests

This repository uses data.json and cypress.config.js(env variables are placed there) files for test data.

Run commands:
- GUI: `npx cypress open`

### Test Plan
- UI
  - Forms
      - Populate the data and assert it from modal window.
  - Tables
    - Edit Table with data and assert the edited cell
    - Create another row of table data and assert the newly added row the correct data
  - Progress bar
    - Start/Stop function testing
    - Reset button function testing
    
- Book store app API
  - Login
    - Login - positive, negative cases
    - Register user - positive, negative cases
    - Add a book
    - Delete all books

