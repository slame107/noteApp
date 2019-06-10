describe('My First Test', function() {
    it('Gets, types and asserts', function() {

      // Attempts to visit the URL  
      cy.visit('https://example.cypress.io')
  
      // Find the element with content: type, click on it
      cy.contains('type').click()
  
      // Get the URL, assert it includes: '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get the input with the .actions-email class
      // Type 'fake@email.com' into the input
      //Assert the input reflects the new value
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })