import React from 'react'
import { shallow } from 'enzyme'
import InputText from 'app/simpleForm/components/inputText'
import { expect } from 'helpers/chaiSetup'

describe('InputText component', () => {
  let inputText

  const inputTextProps = {
    input: { name: 'country' },
    label: 'Country',
    meta: {
      touched: false,
      error: false
    }
  }

  beforeEach(() => {
    inputText = shallow(<InputText {...inputTextProps} />)
  })

  it('renders input', () => {
    expect(inputText).to.have.descendants('input')
  })

  it('renders label', () => {
    expect(inputText.find('label')).to.have.text('Country')
  })

  it('does not render error', () => {
    expect(inputText).to.not.have.descendants('span.error')
  })

  it('does not render error', () => {
    inputText.setProps({ meta: { touched: true, error: true }})
    expect(inputText).to.have.descendants('span.error')
  })
})
