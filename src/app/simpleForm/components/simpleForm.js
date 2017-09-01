import React from 'react'
import { Field } from 'redux-form'
import InputText from 'app/simpleForm/components/inputText'
import validateNotEmpty from 'app/simpleForm/validations/validateNotEmpty'

const onSubmit = values => alert(JSON.stringify(values))

const SimpleForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Field label="Country" name="country" component={InputText} validate={validateNotEmpty} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleForm
