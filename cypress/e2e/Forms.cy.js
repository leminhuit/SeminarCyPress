// Learn Aliases and Finding the Input of a Text Area

describe('Testing the Form', () => {
    beforeEach(() => {
        cy.visit("/forms")
    })

    it('Test Subscribe Form', () => {
        cy.contains(/testing forms/i)
        // Create an alias to smooth out the workflow
        cy.getDataTest('form-input').find('input').as('subscribe-input')

        // cy.getDataTest('form-input').find('input').type('random@coderyan.com')
        // Using the alias to smooth the workflow
        cy.get('@subscribe-input').type('random@coderyan.com')
        cy.contains(/Successfully subbed: random@coderyan.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: random@coderyan.com!/i).should('exist')

        // Add an arbitrary wait time for the message to disappear
        cy.wait(3000)
        cy.contains(/Successfully subbed: random@coderyan.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('random@coderyan.io')
        cy.contains(/invalid email: random@coderyan.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: random@coderyan.io!/i).should('exist')

        cy.wait(3000)
        cy.contains(/invalid email: random@coderyan.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})