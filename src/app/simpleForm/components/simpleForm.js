import React from 'react'
import { Field } from 'redux-form'
import InputText from 'app/simpleForm/components/inputText'
import validateNotEmpty from 'app/simpleForm/validations/validateNotEmpty'

const SimpleForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Field label="Country" name="country" component={InputText} validate={validateNotEmpty} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleForm
