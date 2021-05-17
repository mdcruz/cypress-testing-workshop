## ☀️ Part 6: Continuous integration

### 📚 You will learn

- Cypress Docker images for dependencies
- Installing and caching Cypress itself
- How to start server and run Cypress tests
- CircleCI Orb example

+++

## Todo if possible

- sign up for free account on CircleCI
- use specs from folder `cypress/integration/06-ci`
  - UI spec
  - Data store spec
  - API calls spec

+++

## Questions

- look at the scripts in `package.json`
- run the specs in the interactive mode with `cypress open`
- run the specs in the headless mode with `cypress run`

+++

## Set up CI

- sign up for CircleCI
- fork this repo [mdcruz/cypress-testing-workshop](https://github.com/mdcruz/cypress-testing-workshop)
- add project to CircleCI

![Add project](./images/add-project.png)

+++

## Continuous integration documentation

- [https://on.cypress.io/continuous-integration](https://on.cypress.io/continuous-integration)
- [https://on.cypress.io/ci](https://on.cypress.io/ci) (alias)

+++

## Todo

Read file `.circleci/circle.yml`

- uses CircleCI V2 [https://circleci.com/docs/2.0/sample-config/](https://circleci.com/docs/2.0/sample-config/)
- Docker file from [https://github.com/cypress-io/cypress-docker-images](https://github.com/cypress-io/cypress-docker-images)
  - `cypress/base:8`, `cypress/base:10`, `cypress/base:12.x.y` are good choices

+++

## On CI:

- install and cache dependencies
- start `todomvc` server in the background
- run spec files from `cypress/integration/06-ci`

+++

```yaml
version: 2
jobs:
  build:
    # Use Cypress Docker image with Node 8
    docker:
      - image: cypress/base:8
    working_directory: ~/repo
    steps:
      - checkout
      # Restore previously cached dependencies
      - restore_cache:
          keys:
          - dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - dependencies-
      - run:
          name: Install dependencies
          # https://docs.npmjs.com/cli/ci
          command: npm ci
      # Save dependencies, including Cypress binary in ~/.cache
      - save_cache:
          paths:
            - ~/.npm
            - ~/.cache
          key: dependencies-{{ checksum "package.json" }}
```

+++

```yaml
# two commands: start server, run tests
- run:
    name: Start TodoMVC server
    command: npm start
    working_directory: todomvc
    background: true
- run:
    name: Run Cypress tests
    command: npm test
```

+++

Alternative: use [start-server-and-test](https://github.com/bahmutov/start-server-and-test)

```yaml
- run:
  name: Start and test
  command: npm run ci
```

+++

```json
{
  "scripts": {
    "start:server": "cd todomvc; npm start -- --quiet",
    "e2e:test": "cypress run --spec 'cypress/integration/06-ci/*'",
    "ci": "start-server-and-test start:server http://localhost:3001 e2e:test"
  }
}
```

+++

```json
{
  "scripts": {
    "start": "cd todomvc; npm start -- --quiet",
    "test": "cypress run --spec 'cypress/integration/06-ci/*'",
    "ci": "start-test 3001"
  }
}
```

If you use convention and name your scripts `start` and `test` you can simply provide URL.
You can also shorten local url to just port, `3001` is equivalent to checking http://localhost:3001.


+++

## CircleCI Cypress Orb

A *much simpler* CI configuration. https://github.com/cypress-io/circleci-orb

```yaml
version: 2.1
orbs:
  # import Cypress orb by specifying an exact version x.y.z
  # or the latest version 1.x.x using "@1" syntax
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      # "cypress" is the name of the imported orb
      # "run" is the name of the job defined in Cypress orb
      
      # This checks out the code, installs npm dependencies and runs all Cypress tests
      - cypress/run
```

+++

## Todo

Look how tests are run on Firefox in [.circleci/config.yml](.circleci/config.yml) using [cypress-io/circleci-orb](https://github.com/cypress-io/circleci-orb).

+++

## Record on Dashboard

```yaml
version: 2.1
orbs:
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
          record: true
```

+++

## Parallel builds

```yaml
version: 2.1
orbs:
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
          record: true # record results on Cypress Dashboard
          parallel: true # split all specs across machines
          parallelism: 4 # use 4 CircleCI machines
```

+++

## CircleCI Cypress Orb

Never struggle with CI config 👍

- [github.com/cypress-io/circleci-orb](https://github.com/cypress-io/circleci-orb)
- [circleci.com/orbs/registry/orb/cypress-io/cypress](https://circleci.com/orbs/registry/orb/cypress-io/cypress)
- 📺 [CircleCI + Cypress webinar](https://youtu.be/J-xbNtKgXfY)

+++


## Take away

- use `npm ci` command instead of `npm install` (this produces a deterministic and repeatable build)
- cache `~/.npm` and `~/.cache` folders
- use [start-server-and-test](https://github.com/bahmutov/start-server-and-test) for simplicity
- store screenshots and videos as artifact with [store_artifacts](https://circleci.com/docs/2.0/configuration-reference/#store_artifacts)

+++

## Let's jump to learning about the Cypress Dashboard

Jump to: [07-dashboard](?p=07-dashboard)