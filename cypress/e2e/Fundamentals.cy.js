describe('Fundamentals', () => {
  // Add a beforeEach to set up the environment needed to do the test
  // This version is accessing the Fundamentals site before doing the tests
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    // Having the double backslash covering the text with the i at the end
    // making it being incase-sensitive
    // cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
    // Another version would be
    // cy.get('[data-test="fundamentals-header"]').contain(/Testing Fundamentals/i)

    // Using custom commands created in the commands.js
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })

  // Change too it.only() to focus on one test
  it('Accordian works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})