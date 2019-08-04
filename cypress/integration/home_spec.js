describe('Visit Home Page', function() {
    it('Render home page', function() {
        cy.visit('http://localhost:3000/#/')
        cy.get('.navbar-form')
    })

    it('Find The DJ hub button ', function() {
        cy.visit('http://localhost:3000/#/')
        cy.get('.button > a')        // Rajouter un id : "data-cypress-home-id"="home-message" (HTML 5 compliant)
    })
})

describe('Visit Venues\' Page', function() {
    it('Render Venues\' page', function() {
        cy.visit('http://localhost:3000/#/djs/')
        cy.get('.MuiCardActions-root > :nth-child(1) > .MuiButton-label')
    })
})

describe('Visit Artists\' Page', function() {
    it('Render Artists\' page', function() {
        cy.visit('http://localhost:3000/#/gigs/')
        cy.get('.MuiCardActions-root > :nth-child(1) > .MuiButton-label')
    })
})

