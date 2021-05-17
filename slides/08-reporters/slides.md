## ☀️ Part 8: Reporters

### 📚 You will learn

- built-in reporters
- html reports using mochawesome

+++

- Mocha's [built-in reporters](https://mochajs.org/#reporters) come with Cypress
- [https://on.cypress.io/reporters](https://on.cypress.io/reporters)

+++

## Todo: try a different reporter

There are `json`, `list`, `markdown`, etc, see [https://mochajs.org/#reporters](https://mochajs.org/#reporters)

On cypress.json:

```json
{
  "reporter": "list"
}
```

and run `npm test` or `npm run ci`.

Note:
Each reporter changes the `STDOUT` output.

+++

## Todo: use built-in `junit` reporter

Bonus: direct output to a different file

```json
{
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "cypress/results/output.xml"
  }
}
```

+++

## Question

Are all test results in the saved output file?
**hint**: Compare output.xml and the total number of tests ran on the console.

+++

## Todo: report per spec

```json
{
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "cypress/results/output-[hash].xml",
    "toConsole": true
  }
}
```

Note:
Option `reporterOptions.toConsole = true` mirrors JUnit reports to `STDOUT`.
Filename with `[hash]` will save individual report per spec. Remember to clean the output folder before running the tests like `rm cypress/results/* || true && npm test`.

+++

## Mochawesome

[Mochawesome](https://github.com/adamgruber/mochawesome) generates individual JSON reports, merge them and then generate combined HTML report.

```sh
npm i -D mocha mochawesome \
  mochawesome-merge mochawesome-report-generator
```

```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
```

Note:
This should produce files in `cypress/results` like `mochawesome.json`, `mochawesome_001.json`, `mochawesome_002.json`. Then we need to merge them into a single JSON.

+++

## Merge and generate HTML report

```sh
$(npm bin)/mochawesome-merge --reportDir cypress/results/*.json > combined-report.json
$(npm bin)/marge combined-report.json
```

Uses [https://github.com/adamgruber/mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator) - aka `marge`

Note:
`$(npm bin)/marge` is the bin alias of `mochawesome-report-generator` package. This should save beautiful report `mochawesome-report/mochawesome.html`.

+++

![Mochawesome report](./images/report.png)

+++

## Even simpler..

[cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Zero config Mochawesome reporter for Cypress with screenshots attached to failing tests.


```sh
npm i --save-dev cypress-mochawesome-reporter

```

+++

cypress.json
```json
{
    "reporter": "cypress-mochawesome-reporter"
}
```

cypress/support/index.js
```js
import 'cypress-mochawesome-reporter/register';
```

cypress/plugins/index.js
```js
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
}
```

+++

## Todo
- Set up cypress-mochawesome-reporter after running the command `npm test` or `npm run ci`.
- Have a failing test and look at the generated report after

+++

## Resources

https://www.mariedrake.com/post/test-reporting-with-cypress-and-mochawesome

+++

## Let's jump to learning about Cypress configuration

Jump to: [09-configuration](?p=09-configuration)


