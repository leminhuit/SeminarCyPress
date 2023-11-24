import React from 'react'
import ItemsAccordion from './Accordion'

describe('<ItemsAccordion />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemsAccordion />)
  })
})