import React from 'react'
import { expect } from 'helpers/chaiSetup'
import App from 'app/components/app'
import SimpleForm from 'app/simpleForm/containers/simpleForm'
import { shallow } from 'enzyme'

describe('App component', () => {
  it('renders simple form', () => {
    const app = shallow(<App />)
    expect(app).to.have.descendants(SimpleForm)
  })
})
