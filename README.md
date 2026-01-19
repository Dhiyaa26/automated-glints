# Glints Employer Site - Playwright Automation Test

This repository contains automated end-to-end tests for the Glints Employer staging website:
[https://employers.staging.glints.id](https://employers.staging.glints.id)

## Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)
* GitHub Actions (CI)

## Project Structure

* `tests/` – Test specifications (auth: register & login)
* `pages/` – Page Object classes
* `utils/` – Test data
* `.github/workflows/` – CI configuration for Playwright
* `playwright.config.js` – Playwright configuration

## Test Coverage

### Automated Tests

**Register with Email**

* Negative: cannot submit when required fields are empty
* Happy path and email-already-exists cases are skipped due to unstable email verification behavior in the staging environment


### Manual Tests

* Full manual test cases and test execution results are documented using Qase.io platform

## How to Run the Tests

### Prerequisites

* Node.js (>= 18)
* npm

### Install dependencies

```bash
npm install
```

### Run all tests

```bash
npx playwright test
```

### Run a specific test

```bash
npx playwright test tests/auth/register-email.spec.js --headed
```
### Run test in headed mode 

```bash
npx playwright test --headed
```

### View test report

```bash
npx playwright show-report
```

## CI/CD

This project uses GitHub Actions to automatically run Playwright tests on every push and pull request.
Test reports are stored as artifacts for review.

## Notes

Some tests are intentionally skipped to avoid flaky results caused by limitations of the staging environment,
such as email verification not being sent and inconsistent backend responses.
