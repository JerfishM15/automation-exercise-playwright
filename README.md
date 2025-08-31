# automation-exercise-playwright

This is an automation project using Playwright

## Project Installation

- Download and install [node.js] (https://nodejs.org/en)

- Run de command `npm install` in the project terminal to install all required dependencies.

## Project Execution

- Run the command `npm run test` to execute all created test cases.

- Run the command `npm run test:ui` to open Playwright’s **UI Test Runner** and debug tests interactively.

- Run the command `npm run test:smoke` to execute only the tests tagged with **@smoke**.

- Run the command `npm run test:reg` to execute only the tests tagged with **@regression**.

- Run the command `npm run test:grep --<expresión>` to execute the tests that match the pattern specified in the expression.

- Run the command `npm run allure:report` to generate the Allure HTML report from the results in the allure-results folder.

- Run the command `npm run allure:open` to open in the browser the HTML report generated in the allure-report folder.

- Run the command `npm run test:allure` to execute the full pipeline: run the tests → generate the Allure report → open the report in the browser.

- Run the command `npm run allure:clean` to clean the .allure cache folder used by Allure to store historical data.

- Run the command `npm run ci:allure` to execute the tests and generate the Allure report without opening it (intended for CI/CD).
