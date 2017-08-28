import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const expect = chai.expect

export {
  expect,
  chai as default
}
