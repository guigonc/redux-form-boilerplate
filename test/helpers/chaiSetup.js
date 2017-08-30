import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'

chai.use(chaiEnzyme())
chai.use(sinonChai)

const expect = chai.expect

export {
  expect,
  chai as default
}
