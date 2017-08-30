import SimpleForm from 'app/simpleForm/components/simpleForm'
import { reduxForm } from 'redux-form'

export default reduxForm({
  form: 'simpleForm',
  initialValues: {
    country: 'Brazil'
  }
})(SimpleForm)
