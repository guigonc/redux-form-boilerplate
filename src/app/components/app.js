import React from 'react'
import SimpleForm from 'app/simpleForm/containers/simpleForm'

const onSubmit = values => alert(JSON.stringify(values))

const App = () => (
  <SimpleForm onSubmit={onSubmit} />
)

export default App
