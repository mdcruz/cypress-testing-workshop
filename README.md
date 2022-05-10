# Cypress Testing Workshop

An example repo containing a Todo application and exercise files to get started and/or increase your knowledge with Cypress. This was originally forked from [Cypress' testing-workshop-cypress repo](https://github.com/cypress-io/testing-workshop-cypress).

## Requirements

- Any computer: Mac, Windows, Linux
- Text Editor or IDE of choice (preferably [VS Code](https://code.visualstudio.com/download))
- [Node 16.15.0+ (LTS)](https://nodejs.org/)
- [git](https://git-scm.com)
- [CircleCI account](https://circleci.com/)

## Getting Started

In order to get the code and install dependencies

```bash
git clone https://github.com/mdcruz/cypress-testing-workshop.git
cd testing-workshop-cypress
npm install
```

If necessary, install dependencies inside TodoMVC folder

```bash
cd todomvc
npm install
```

## Starting the Todo Application

```bash
cd todomvc #if you're not in todomvc folder yet, otherwise ignore this
npm start
```

and you should see in the terminal

```text
> json-server --static . data.json --middlewares ./node_modules/json-server-reset


  \{^_^}/ hi!

  Loading data.json
  Loading ./node_modules/json-server-reset
  Done

  Resources
  http://localhost:3001/todos

  Home
  http://localhost:3001
```

## Starting the Cypress Test Runner

Open another terminal window and then type

```bash
npm run cy:open
```

## Viewing the slides locally

If you want to view the slides locally, open another terminal window, go to the `cypress-testing-workshop` directory and then type

```bash
npm run slides:build
npm run slides:dev
```

To access the slides, navigate to http://localhost:3000

## Workshop Credits

Huge thanks to the Cypress team especially the code contributors for creating a workshop template 🎉

- [Cypress Testing Workshop](https://github.com/cypress-io/testing-workshop-cypress)
- [Gleb Bahmutov](https://twitter.com/bahmutov)
