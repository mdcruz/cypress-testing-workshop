## ☀️ Part 7: The Dashboard

### 📚 You will learn

- Purpose for Cypress Dashboard
- How to send test results to Cypress Dashboard
- Test parallelization using Cypress Dashboard

+++

- CI is nice, but
  - artifacts are all over the place
  - no consistent view of the tests

+++

## Cypress dashboard

![Cypress dashboard](./images/dashboard-runs.png)

+++

- store test results and videos
- insight into each failure
- parallel test execution
- GitHub integration
- analytics (WIP)

+++

## Todo

- extend work in `06-ci` folder
- open Cypress test runner in interactive mode
- click "Runs / Set up project to record" or "Runs / Login to Dashboard"

![Set up project to record](./images/set-up-project-to-record.png)

+++

![Logged in to dashboard](./images/dashboard-login.png)

+++

## Todo: Record your test runs

- record a test run locally
- look at the test results at Cypress dashboard

**tip** [https://on.cypress.io/dashboard-faq](https://on.cypress.io/dashboard-faq)

+++

## Bonus

- pass record key as an environment variable
- make a test to fail on purpose
- look at the test failure on the dashboard

+++

## Parallelization

- run tests on N machines in 1/N time with [https://on.cypress.io/parallelization](https://on.cypress.io/parallelization)
- requires the `ci-build-id` flag if running locally
- 📺 [Cypress parallelization webinar](https://youtu.be/FfqD1ExUGlw)

```sh
npx cypress run --record --parallel
```

+++

![Parallel local run](./images/local-parallelization.png)

+++

## Let's jump to learning about Cypress reporters

Jump to: [08-reporters](?p=08-reporters)