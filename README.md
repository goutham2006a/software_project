# SauceDemo End-to-End Testing with Cypress

## Project overview
This project automates end-to-end tests against the **existing public SauceDemo demo website**: https://www.saucedemo.com/

No application, backend, or database is developed as part of this project. Cypress drives a real browser and checks the website's visible behaviour.

## Technology
- Cypress
- JavaScript
- Node.js and npm
- Visual Studio Code
- Chrome or another Cypress-supported browser

## Compatibility note
Use a Node.js version supported by the Cypress version installed on your machine. Current Cypress releases have OS requirements; check https://docs.cypress.io/app/get-started/install-cypress before installing. On macOS, current Cypress releases require a supported modern macOS version. If your computer is still on macOS 10.15 Catalina, upgrade macOS or use a supported computer before attempting the latest Cypress release.

## Setup
1. Install a supported Node.js LTS version from https://nodejs.org/
2. Install a supported Chrome browser (optional if using another supported browser).
3. Extract this ZIP.
4. Open the extracted `SauceDemo-Cypress-Testing` folder in VS Code.
5. Open Terminal in VS Code and run:

   ```bash
   npm install
   ```

6. Open the Cypress interactive runner:

   ```bash
   npm run cy:open
   ```

7. Choose **E2E Testing**, choose a browser, and select `saucedemo.cy.js`.

## Run tests from the terminal
Run all specs in headless mode:

```bash
npm run cy:run
```

Run in Chrome:

```bash
npm run cy:chrome
```

Generate a JUnit XML report:

```bash
npm run cy:report
```

The JUnit report is written under `cypress/results/`. Cypress screenshots from failed tests are saved under `cypress/screenshots/`; videos are saved under `cypress/videos/` when video recording is enabled.

## Included test cases
- TC01: Valid login
- TC02: Invalid password
- TC03: Locked-out user
- TC04: Empty login fields
- TC05: Add product to cart
- TC06: Remove product from cart
- TC07: Sort products by price (low to high)
- TC08: Checkout required-field validation
- TC09: Complete checkout

See `test-cases/test-case-matrix.csv` for the formal test matrix.

## Demo credentials
SauceDemo publishes demo accounts on its login page. The standard account used by this project is:
- Username: `standard_user`
- Password: `secret_sauce`

The locked-out account test uses `locked_out_user` with the same demo password. These are public demo credentials, not personal credentials.

## Important testing notes
- Run tests against the public demo site only and avoid high-volume or disruptive testing.
- The demo site is external; network or service interruptions can affect results.
- Do not invent pass/fail results. Record the actual output from your own test run.
- Do not claim internal statement/branch code coverage: the application's source code is not available. Report requirement coverage and test-case coverage instead.
- A defect must be reproduced and documented with actual evidence. Expected validation errors are successful test outcomes, not defects.

## Metrics for the assignment
Record these after execution:
- Total executed tests
- Passed tests
- Failed tests
- Skipped tests
- Pass rate = (Passed / Executed) × 100
- Total execution duration
- Requirement/test-case coverage = (Requirements with at least one executed test / Total identified requirements) × 100

Cypress's terminal output and JUnit XML can be used as evidence. Keep dated screenshots of the Cypress runner and terminal output.

## Pair-work suggestion
- Student A: environment setup, Cypress configuration, test execution, report generation and repository organization.
- Student B: application exploration, requirements, test-case matrix and expected-result design.
- Both: review failures, validate evidence, prepare slides and rehearse the demonstration.

## Suggested 10-slide presentation
1. Title, course, student details, roles and selected stack.
2. Cypress profile, architecture, licensing and industry relevance.
3. SauceDemo system-under-test overview and workflow.
4. Test strategy and test-case matrix.
5. Cypress setup, configuration and selected test-script snippets.
6. Actual execution screenshots and pass/fail/duration results.
7. Defect log with reproducible evidence (or state that no defects were observed in the tested scope).
8. Test-case/requirement coverage and execution metrics; explain source-code coverage is unavailable.
9. Cypress advantages, limitations and verdict.
10. Student contributions, repository link and references.

## References
- SauceDemo: https://www.saucedemo.com/
- Cypress documentation: https://docs.cypress.io/
- Cypress installation: https://docs.cypress.io/app/get-started/install-cypress
- Cypress first E2E test: https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test
- Cypress CI guide: https://docs.cypress.io/app/continuous-integration/overview

# software_project
