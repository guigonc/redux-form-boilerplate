import React from 'react'
import { expect } from 'helpers/chaiSetup'
import SimpleForm from 'app/simpleForm/components/simpleForm'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon'

const mockStore = configureMockStore()

describe('SimpleForm component', () => {
  let simpleForm
  let handleSubmitSpy
  let onSubmitStub

  beforeEach(() => {
    handleSubmitSpy = sinon.spy()
    onSubmitStub = () => {}

    const store = mockStore()
    const props = {
      onSubmit: onSubmitStub,
      handleSubmit: handleSubmitSpy
    }

    simpleForm = shallow(<SimpleForm {...props}/>)
  })

  it('renders simple form', () => {
    expect(simpleForm).to.have.descendants('Field')
  })

  it('renders button', () => {
    expect(simpleForm).to.have.descendants('button')
  })

  it('calls handleSubmit', () => {
    expect(handleSubmitSpy).to.be.calledOnce
    expect(handleSubmitSpy).to.be.calledWith(onSubmitStub)
  })
})
