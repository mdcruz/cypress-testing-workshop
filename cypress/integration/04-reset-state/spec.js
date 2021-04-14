/// <reference types="cypress" />
/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

describe('reset data using XHR call', () => {
  beforeEach(() => {
    // application should be running at port 3000
    // and the "localhost:3001" is set as "baseUrl" in "cypress.json"
    // TODO call /reset endpoint with POST method and object {todos: []}
    cy.visit('/')
  })

  it('adds two items', () => {
    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})

describe('set initial data', () => {
  it('sets data to complex object right away', () => {
    // TODO call /reset endpoint and pass an object with todos
    cy.visit('/')
    // check what is rendered
  })

  it('sets data using fixture', () => {
    // TODO load todos from "cypress/fixtures/two-items.json"
    // and then call the /reset endpoint to set todos
    cy.visit('/')
    // check what is rendered
  })
})

describe('reset data using cy.writeFile', () => {
  beforeEach(() => {
    // TODO write file "todomvc/data.json" with stringified todos object
    // file path is relative to the project's root folder
    // where cypress.json is located
    cy.visit('/')
  })

  it('adds two items', () => {
    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})

describe('reset data using cy.exec', () => {
  beforeEach(() => {
    // TODO use cy.exec to call command to reset database
    cy.visit('/')
  })

  it('adds two items', () => {
    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})
