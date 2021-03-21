/// <reference types="Cypress" />

describe('Landing page test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')

    //Set up aliases
    cy.get('[data-cy=card]').as('Card')
    cy.get('[data-cy=card]')
      .first()
      .children('[data-cy=card-button]')
      .as('CardButton')
    cy.get('[data-cy=card]')
      .first()
      .children('[data-cy=image-wrapper]')
      .children('[data-cy=card-image]')
      .as('CardImages')
  })

  it('Renders all the correct cards', () => {
    
    //Assertions for the hero section
    cy.get('[data-cy=branding]')
      .should('be.visible')
      .contains('Marshmallow')
    cy.get('[data-cy=header]')
      .should('be.visible')
      .contains('ROCKETS AND DRAGONS')

    //Assertion to check the total number of cards initially rendered
    cy.get('@Card')
      .should('have.length', 6)
    
    //Assertion for filter buttons
    cy.get('[data-cy=rockets-btn]')
      .should('be.visible')
      .contains('Rockets')
      .click()
    cy.get('@Card')
      .should('have.length', 4) 
    cy.get('[data-cy=dragons-btn]')
      .should('be.visible')
      .contains('Dragons')
      .click()
    cy.get('@Card')
      .should('have.length', 2) 
    
    //Assertion for card features
    cy.get('@Card')
      .first()
      .children('[data-cy=card-name]')
      .should('be.visible')
    cy.get('@CardButton')
      .should('be.visible')
      .contains('View Description')
    cy.get('@CardImages')
      .should('be.visible')
  })

  it('Modal renders the correct content', () => {
    //Click the View Description button
    cy.get('@CardButton')
      .click()

    //Assertions to check that the selected card description is rendered
    cy.get('[data-cy=modal]')
      .should('be.visible')
    cy.get('[data-cy=modal-description]')
      .should('be.visible')
      .click()

    //Click to enlarge an image
    cy.get('@CardImages')
      .first()
      .click()

    //Assertions to check that the selected card image is rendered
    cy.get('[data-cy=modal]')
      .should('be.visible')
    cy.get('[data-cy=modal-image]')
      .should('be.visible')
      .click()
  })
})