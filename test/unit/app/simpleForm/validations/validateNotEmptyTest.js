import validateNotEmpty from 'app/simpleForm/validations/validateNotEmpty'
import { expect } from 'chai'

describe('validateNotEmpty', () => {
  it('is false when text is empty', () => {
    expect(validateNotEmpty('')).to.equal('Must enter a value')
  })

  it('is true when text is present', () => {
    expect(validateNotEmpty('Brazil')).to.be.null
  })
})
