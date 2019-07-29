describe('Visit Home Page', function() {
    it('Render home page', function() {
        cy.visit('http://localhost:3000/#/')
    })
    it('Find Buzzlink title', function() {
        cy.visit('http://localhost:3000/#/')
        cy.contains('Buzzlink')
        // Rajouter un id : "data-cypress-home-id"="home-message" (HTML 5 compliant)
    })
})
describe('Visit Venues\' Page', function() {
    it('Render Venues\' page', function() {
        cy.visit('http://localhost:3000/artists/#/')
    })
})
describe('Visit Artists\' Page', function() {
    it('Render Artists\' page', function() {
        cy.visit('http://localhost:3000/venues/#/')
    })
})

