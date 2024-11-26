describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit(' http://localhost:5173/')
  })

  it('should display login form', () => {
     cy.get ('form').should('be.visible')
  })

  it('should login with valid creditials', () => {
     cy.get ('input[type="email"]').type('thayllateixeira@outlook.com')
     cy.get ('input[type="password"]').type('Malu.3099')
     cy.get ('button[type="submit"]').click()
     cy.url().should('include', '/home')
     cy.get('header').should('be.visible')
  })
})