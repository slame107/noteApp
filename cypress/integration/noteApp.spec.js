describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
      cy.server()

      // Find the element with content: Add Note, click on it
      cy.contains('Add Note').click()
      cy.contains('Note Generator')
      cy.contains('Note 1')

      

      // Error: title element covered by another element
      // cy.contains('Title').click()
      // cy.contains('Search Notes').click()

      // Get the URL, assert it includes: '/home'
      cy.url().should('include', '/home')
      
      // Visit the /noteslist path
      cy.visit('/noteslist')
      
      // Get the URL, assert it includes: '/noteslist'
      cy.url().should('include', '/noteslist')

      // Verifies the h2 element contains TEST
      cy.get('h2').should('contain', 'TEST')

      cy.screenshot()


    })
  })