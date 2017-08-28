import React from 'react'
import { expect } from 'helpers/chaiSetup'
import App from 'app/components/app'
import { shallow } from 'enzyme'

describe('App component', () => {
  it('renders root component', () => {
    const app = shallow(<App />)
    expect(app).to.have.type('div')
  })
})
