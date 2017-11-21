import React from 'react'
import { touch } from 'redux-form'

class MultiInputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      street: { touched: false },
      number: { touched: false }
    }
  }

  isEveryInputTouched() {
    return Object.values(this.state).every(f => f.touched)
  }

  shouldTouch() {
    return !this.props.meta.touched && this.isEveryInputTouched()
  }

  renderField(fieldName) {
    const { input: { name, value } } = this.props
    
    return <input 
      name={`${name}.${fieldName}`}  
      value={(value && value[fieldName]) || ''}  
      onChange={this.onChange(fieldName, value)} 
      onBlur={this.onBlur(fieldName)} 
      type="text" 
    />
  }

  onBlur = fieldName => event => {
    const { input: { name }, meta: { form, dispatch }} = this.props
    
    this.setState({ [fieldName]: { touched: true } }, () => {
      if (this.shouldTouch()) {
        dispatch(touch(form, name))
      }
    })
  }

  onChange = (field, value) => event => {
    this.props.input.onChange({ ...value, [field]: event.target.value })
  }

  render() {
    const { input, label, meta: { error, touched }} = this.props
    
    return (<div>
      <label htmlFor={input.name}>{label}</label>
      { this.renderField('street') }
      { this.renderField('number') }
      { touched && error && <span className="error">{error}</span> }
    </div>)
  }
}

export default MultiInputText
