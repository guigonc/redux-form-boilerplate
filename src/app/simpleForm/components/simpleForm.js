import React from 'react'
import { Field } from 'redux-form'
import MultiInputText from 'app/simpleForm/components/multiInputText'

const onSubmit = values => alert(JSON.stringify(values))

const validateAddress = (value) => {
  if (!value) return 'Address is empty'
  if (!value.street) return 'Street is empty'
  if (!value.number) return 'Number is empty'
  return null
}

const SimpleForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Field label="Home Address" name="home" component={MultiInputText} type="text" validate={validateAddress}/>
      <Field label="Work Address" name="work" component={MultiInputText} type="text" validate={validateAddress}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleForm
