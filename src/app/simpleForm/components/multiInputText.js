import React from 'react'
import { Fields, FormSection } from 'redux-form'

const renderAddreessInputs = ({ street, number, error }) => (<div>
  <input {...street.input} type="text" />
  <input {...number.input} type="text" />
  { street.meta.touched && number.meta.touched && error && <span className="error">{error}</span> }
</div>)

const MultiInputText = (props) => {
  const { input: { name }, label, meta: { error }} = props
  const names = [
    'street',
    'number'
  ]

  return (<div>
    <label htmlFor={name}>{label}</label>
    <FormSection name={name}>
      <Fields names={names} component={renderAddreessInputs} error={error}/>
    </FormSection>
  </div>)
}

export default MultiInputText
